import { authStore } from "../../../stores/authStore"
import { trpc } from "../../trpc"
import ContactItem from "./ContactItem"
const Contacts = () => {
  const { uid } = authStore(state => state.auth)
  const { data } = trpc.user.getContacts.useQuery({ uid })
  return (
    <div className="flex flex-col gap-3 p-3">
      {
        (data?.friends || [] ).map((contact: any) =>
          <ContactItem email={contact} />
        )
      }
    </div>
  )
}

export default Contacts