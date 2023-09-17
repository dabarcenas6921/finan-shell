"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "~/app/@components/ui/dialog"
  
import { useState, useEffect } from "react"
import { ProfileForm } from "./_component/profile-form";
export default function AccountPage() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    if (!mounted) return null

  return (
    <>
    <Dialog>
    <DialogTrigger>Open</DialogTrigger>
    <DialogContent>
        <DialogHeader>
        <DialogTitle className="mt-5">🐚🐚 Enter your finanshell details! 🐚🐚</DialogTitle>
        <DialogDescription>
            <ProfileForm />
        </DialogDescription>
        </DialogHeader>
    </DialogContent>
    </Dialog>
    </>
  )
}