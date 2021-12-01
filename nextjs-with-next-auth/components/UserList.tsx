const UserList = ({ className, users }) => {
  return (
    <div className={className}>
      <h2>User List</h2>
      {(users?.length > 0 && (
        <table>
          <tr>
            <th>Name</th>
            <th>Provider</th>
          </tr>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.accounts[0].provider}</td>
            </tr>
          ))}
        </table>
      )) || <p>There are currently no users.</p>}
    </div>
  );
};

export { UserList };
