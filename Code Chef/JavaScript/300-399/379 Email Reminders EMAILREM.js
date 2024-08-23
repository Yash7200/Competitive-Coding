process.stdin.setEncoding("utf-8");

const countUsersToSendEmail = (users, unsubscribedUsers) => {
    const usersToSendEmail = users - unsubscribedUsers;
    console.log(usersToSendEmail);
};

process.stdin.on("data", (input) => {
    const [users, unsubscribedUsers] = input.trim().split(" ").map(Number);
    countUsersToSendEmail(users, unsubscribedUsers);
});