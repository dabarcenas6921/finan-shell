import { api } from "~/trpc/server";
import { redirect } from 'next/navigation'

export default async function Page() {
  try {
    const createUser = await api.user.create.query();
    console.log(createUser);
    redirect('/account-setup')
  } catch (error){
    redirect('/account-setup') 
  }
  }