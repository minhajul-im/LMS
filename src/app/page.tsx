import { createUser, findAllUsers } from "@/action/_user";

const HomePage = async () => {
  await createUser("minhajul.cpp@gmail.com", "minhaj@hello", "ADMIN");
  await findAllUsers();

  return (
    <main className="container mx-auto">
      <h1 className="pt-10">hello</h1>
    </main>
  );
};

export default HomePage;
