import ConstitutionElement from "@/components/ConstitutionElement"
import { getConstitution } from "@/sanity/sanity-utils"

export default async function Constitution() {
  const constitution = await getConstitution()
  return (
    <div className="py-10">
      <h2 className="text-white text-5xl text-center font-bold lg:mt-12">Constitution</h2>
        <ConstitutionElement
        constitution={constitution}
        />
    </div>
  )
}
