import { useState, useEffect } from 'react'

const BASE_URL = 'http://localhost:3000/registros'

export function useRegistros() {
    const [registros, setRegistros] = useState([])
    const [carregando, setCarregando] = useState(false)
    const [erro, setErro] = useState('')

    const buscar = async (e) => {
        setCarregando(true)
        try {
            const resposta = await fetch(BASE_URL)
            const dados = await resposta.json()
            setRegistros(dados)
        } catch {
            setErro("Erro ao carregar registros")
        } finally {
            setCarregando(false)
        }
    }

    const criar = async (dados) => {
        try {
            var res = await fetch(BASE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dados)
            })
            if (!res.ok) {
                const err = await res.json()
                throw new Error(err.erro)
            }
            await buscar()
        } catch (e) {
            setErro(e.message)
            throw e
        }
    }

    const atualizar = async (id, dados) => {
        try {
            const res = await fetch(`${BASE_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dados)
            })
            if (!res.ok) {
                const err = await res.json()
                throw new Error(err.erro)
            }
            await buscar()
        } catch (e) {
            setErro(e.message)
            throw e
        }
    }

    const deletar = async (id) => {
        const confirmou = window.confirm('Deseja remover este registro?')
        if (!confirmou) return

        try {
            const resposta = await fetch(`http://localhost:3000/registros/${id}`, { method: 'DELETE' })
            if (!resposta.ok) {
                const dados = await resposta.json()
                setErro(dados.erro)
                return
            }
            buscar()
        } catch {
            setErro('Erro ao remover usuário!')
        }
    }


    useEffect(() => {
        buscar()
    }, [])

    return { registros, carregando, erro, buscar, criar, atualizar, deletar }
}