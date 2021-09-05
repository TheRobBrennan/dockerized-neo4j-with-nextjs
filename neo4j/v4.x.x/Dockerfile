# Official Neo4j Docker Images available at https://hub.docker.com/_/neo4j
FROM neo4j:4.2.2

# OPTIONAL: Use Pacific time (PST/PDT) instead of UTC
# This correctly sets the timezone for the Docker container; however you will have to define the following Neo4j configuration settings as well:
#   # Timezone - Default is UTC
#   - NEO4J_dbms_db_timezone=SYSTEM
#   - NEO4J_db_temporal_timezone=America/Los_Angeles
RUN ln -fs /usr/share/zoneinfo/PST8PDT /etc/localtime
RUN dpkg-reconfigure -f noninteractive tzdata

# Install curl explicitly; it is no longer included in Neo4j base images
RUN apt-get update; apt-get install curl -y

# Specify the user/password for your Neo4j database
ENV NEO4J_AUTH=neo4j/letmein

# The APOC (Awesome Procedures On Cypher) library consists of many (about 450) procedures and functions to help with many different
# tasks in areas like data integration, graph algorithms or data conversion.
# https://github.com/neo4j-contrib/neo4j-apoc-procedures/releases
ENV APOC_VERSION=4.2.0.2
ENV APOC_URI https://github.com/neo4j-contrib/neo4j-apoc-procedures/releases/download/${APOC_VERSION}/apoc-${APOC_VERSION}-all.jar
RUN sh -c 'cd /var/lib/neo4j/plugins && curl -L -O "${APOC_URI}"'

# We need to expose port 7474 for HTTP, port 7473 for HTTPS, and port 7687 for Bolt
EXPOSE 7474 7473 7687

# Copy our wrapper which will allow us to do things like import sample data, etc.
COPY wrapper.sh wrapper.sh
RUN chmod +x wrapper.sh

## If you would like to copy Cypher file(s) for import, please uncomment the line below
COPY ./__seed__/*.cypher /var/lib/neo4j/import/

ENTRYPOINT ["./wrapper.sh"]