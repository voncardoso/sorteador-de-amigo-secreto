import { render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";


// jest

test('Quando o input tiver vazio novos participantes podem ser adicionados', () => {
    render(<Formulario />)
    
    // encontrar no DOM
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    // encontrar o botão
    const botao = screen.getByRole('button')
    //garantir que o input estja no documento
    expect(input).toBeInTheDocument()
    //garrantir que o botão estja disabilitado
    expect(botao).toBeDisabled()
})