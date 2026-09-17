'use client';

import { User } from "@/src/types/User";
import { MOCK_USERS } from "@/src/components/UserProfilesList";
import {useParams, useRouter} from "next/navigation";
import {
  Dialog,
  DialogContent, DialogHeader, DialogTitle,
} from "@/src/components/ui/dialog"
import { UserProfileDetails } from "@/src/components/UserProfileDetails";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/src/components/ui/empty";
import { UserRoundXIcon } from "lucide-react";

export default function UserModal() {
  const { id } = useParams<{ id: string; }>();
  const router = useRouter();
  const user: User | undefined = MOCK_USERS.find((user) => user.id === id);


  const onOpenChange = () => {
    router.back();
  }

  return (
    <Dialog open defaultOpen onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User profile</DialogTitle>
        </DialogHeader>

        {user
          ? <UserProfileDetails user={user} />
          :
          <Empty className="h-full bg-muted/60 max-w-md mx-auto">
            <EmptyHeader>
              <EmptyMedia variant="icon" className="bg-destructive/10">
                <UserRoundXIcon className="text-destructive size-5" />
              </EmptyMedia>
              <EmptyTitle className="text-xl">Wystąpił błąd</EmptyTitle>
              <EmptyDescription className="max-w-xs text-pretty leading-tight">
               Nie znaleziono użytkownika 
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        }
        </DialogContent>
    </Dialog>
  )
}