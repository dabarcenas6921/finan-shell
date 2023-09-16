import { api } from "~/trpc/server";

export default async function Page() {
    const createUser = await api.user.create.query();
    console.log(createUser);
    <div></div>
  }