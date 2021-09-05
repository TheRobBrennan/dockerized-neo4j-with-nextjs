#!/bin/bash

# THANK YOU! Special shout-out to @marcellodesales on GitHub
# https://github.com/marcellodesales/neo4j-with-cypher-seed-docker/blob/master/wrapper.sh for such a great example script

# Log the info with the same format as NEO4J outputs
log_info() {
  # https://www.howtogeek.com/410442/how-to-display-the-date-and-time-in-the-linux-terminal-and-use-it-in-bash-scripts/
  # printf '%s %s\n' "$(date -u +"%Y-%m-%d %H:%M:%S:%3N%z") INFO  Wrapper: $1"  # Display UTC time
  printf '%s %s\n' "$(date +"%Y-%m-%d %H:%M:%S:%3N%z") INFO  Wrapper: $1"  # Display local time (PST/PDT)
  return
}

# Adapted from https://github.com/neo4j/docker-neo4j/issues/166#issuecomment-486890785
# Alpine is not supported anymore, so this is newer
# Refactoring: Marcello.deSales+github@gmail.com

# turn on bash's job control
# https://stackoverflow.com/questions/11821378/what-does-bashno-job-control-in-this-shell-mean/46829294#46829294
set -m

# Start the primary process and put it in the background
/docker-entrypoint.sh neo4j &

# Wait for Neo4j
log_info "Checking to see if Neo4j has started..."
wget --quiet --tries=10 --waitretry=10 -O /dev/null http://${DB_HOST}:${DB_PORT}
log_info "Neo4j has started 🤓"

# Import data
log_info  "Loading and importing Cypher file(s)..."

for cypherFile in /var/lib/neo4j/import/*.cypher; do
    log_info "Processing ${cypherFile}..."
    contents=$(cat ${cypherFile})
    cat ${cypherFile} | cypher-shell -u ${DB_USER} -p ${DB_PASSWORD} --format plain
done

log_info  "Finished loading data."

# now we bring the primary process back into the foreground
# and leave it there
fg %1