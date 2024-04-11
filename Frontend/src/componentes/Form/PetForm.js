import { useState } from 'react'

import formStyles from './Form.module.css'

import Input from './Input'
import Select from './Select'

function PetForm({ handleSubmit, petData, btnText }) {
  const [pet, setPet] = useState(petData || {})
  const [preview, setPreview] = useState([])
  const colors = [
    'Pedreiro',
    'Eletricista',
    'Engenheiro Civil',
    'Arquiteto',
    'Encanador',
    'Carpinteiro',
    'Pintor',
    'Mestre de Obras',
    'Topógrafo',
    'Operador de Máquinas Pesadas',
    'Técnico em Edificações',
    'Mestre de Obras',
    'Armador',
    'Caldeireiro',
    'Instalador de Drywall',
    'Marceneiro',
    'Vidraceiro',
    'Montador de Andaimes',
    'Serralheiro',
    'Estucador',
    'Encarregado de Obras',
    'Fundações e Estruturas',
    'Operador de Retroescavadeira',
    'Pedreiro de Acabamento',
    'Pedreiro de Alvenaria Estrutural',
    'Pedreiro de Revestimento',
    'Técnico em Segurança do Trabalho',
    'Torneiro Mecânico',
    'Soldador',
    'Telhadista',
    'Operador de Guindaste',
    'Apontador de Obras',
    'Operador de Betoneira',
    'Geotécnico',
    'Engenheiro de Segurança do Trabalho',
    'Fiscal de Obras'
]

  function onFileChange(e) {
    console.log(Array.from(e.target.files))
    setPreview(Array.from(e.target.files))
    setPet({ ...pet, images: [...e.target.files] })
  }

  function handleChange(e) {
    setPet({ ...pet, [e.target.name]: e.target.value })
  }

  function handleColor(e) {
    setPet({
      ...pet,
      color: e.target.options[e.target.selectedIndex].text,
    })
  }

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(pet)
  }

  return (
    <form onSubmit={submit} className={formStyles.form_container}>
      <div className={formStyles.preview_pet_images}>
        {preview.length > 0
          ? preview.map((image, index) => (
              <img
                src={URL.createObjectURL(image)}
                alt={pet.name}
                key={`${pet.name}+${index}`}
              />
            ))
          : pet.images &&
            pet.images.map((image, index) => (
              <img
                src={`${process.env.REACT_APP_API}/images/pets/${image}`}
                alt={pet.name}
                key={`${pet.name}+${index}`}
              />
            ))}
      </div>
      <Input
        text="Imagens de capa do serviço"
        type="file"
        name="images"
        handleOnChange={onFileChange}
        multiple={true}
      />
      <Input
        text="Nome do prestador"
        type="text"
        name="name"
        placeholder="Digite o nome"
        handleOnChange={handleChange}
        value={pet.name || ''}
      />
      <Input
        text="Descrição do serviço"
        type="text"
        name="description"
        placeholder="Digite o peso aproximado"
        value={pet.weight || ''}
        handleOnChange={handleChange}
      />
      <Select
        name="color"
        text="Selecione a categoria"
        options={colors}
        handleOnChange={handleColor}
        value={pet.color || ''}
      />
      <input type="submit" value={btnText} />
    </form>
  )
}

export default PetForm