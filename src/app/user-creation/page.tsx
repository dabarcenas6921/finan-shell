import { api } from "~/trpc/server";

export default function Page() {
    const createUser = api.user.create.query();
    console.log(createUser);
    <div></div>
  }