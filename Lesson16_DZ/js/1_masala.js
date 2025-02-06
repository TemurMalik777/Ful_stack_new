// async function getUsers(names) {
//     const requests = names.map(async (name) => {
//         try {
//             const response = await fetch(
//                 `https://api.github.com/users/${name}`
//             );
//             return response.ok ? await response.json() : null;
//         } catch {
//             return null;
//         }
//     });

//     return Promise.all(requests);
// }

// getUsers(["octocat", "torvalds", "nonexistentuser"]).then(console.log);

//#############################################################################

async function getUserData(userId) {
    try {
        const userResponse = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const postsResponse = await fetch(
            `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );

        if (!userResponse.ok || !postsResponse.ok)
            throw new Error("User or posts not found");

        const user = await userResponse.json();
        const posts = await postsResponse.json();

        return {
            name: user.name,
            city: user.address.city,
            companyName: user.company.name,
            postTitles: posts.map((post) => post.title),
        };
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

// Foydalanish
getUserData(1).then(console.log);
