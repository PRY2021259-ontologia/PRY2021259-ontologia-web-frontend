import {useState} from 'react'

const PlantCard = ({agente, causal = false}) => {
  const [text, setText] = useState(agente.descripcion.slice(0, 200));
  const [readMore, setReadMore] = useState(false);
  let color = causal ? 'text-red-300' : 'text-yellow-300';

  return (
    <div className='mx-auto flex flex-col my-4 md:flex-row md:justify-between items-center min-h-72 shadow-lg rounded-xl w-1/2 m-6 celular:p-5'>
        <div>
        <div className='flex flex-col'>
            <h1 className={`text-3xl px-10 pt-5 font-medium ${color}`}>{agente.nombre}</h1>
            <div className='px-10 py-5 '>
            <p>
                {text}
                {!readMore && "..."}
            </p>
            <p
                className='cursor-pointer text-blue-300'
                onClick={() => {
                    if (!readMore) {
                    setText(agente.descripcion);
                    setReadMore(true);
                    } else {
                    setText(agente.descripcion.slice(0, 200));
                    setReadMore(false);
                    }
                }}
            >{readMore ? "Mostrar menos" : "Seguir leyendo"}</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default PlantCard