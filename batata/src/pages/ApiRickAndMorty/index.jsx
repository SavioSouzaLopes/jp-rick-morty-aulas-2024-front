import { useEffect, useState } from 'react'
import './styles.css'
import Card from '../../components/card'

export default function ApiRickAndMorty(){

    const [ conteudo, setConteudo] =useState(<>carregando...</>)

    async function getCharacters() {
        const recOptions = {
            method: "GET",
            redirect: "follow"
        }

        const response = await fetch(
            "https://rickandmortyapi.com/api/character",
            recOptions
        )

        if(!response.ok){
            throw new Error("Httml Error")
        }

        const apiResponse = await response.json()
        return apiResponse
    }

    async function buildCards() {
        const consulta = await getCharacters()

        return consulta.results.map(personagem => <Card data ={personagem} />)
    }

    useEffect(() => {
        async function getConteudo () {
            setConteudo(await buildCards())
        }

        getConteudo
    }, [])

    return (
        <div className='list-api'>
            { conteudo }
        </div>
        )
}