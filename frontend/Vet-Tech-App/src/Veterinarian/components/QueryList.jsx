import { QueryListItem } from "./QueryListItem";


const queryArrayList = [
    {
        id: 1,
        queryTime: '9:00',
        petName: 'Firu',
        pet:'Perro',
    },
]



export const QueryList = () => {
  return (
    <section className="flex flex-col px-6 max-w-sm">
        <h5 className="mb-4 text-[12px] font-manrope font-semibold">Consultas programadas para el día de hoy</h5>

        {
            queryArrayList.map(query => (
                <QueryListItem key={query.id} {...query}/>
            ))
        }

    </section>
  )
}
