import { render, screen, fireEvent } from "@testing-library/react"
import NavBar from "@/components/navbar"

describe('NavBar Component', ()=> {

    test('renderiza o logo AnimeShop', ()=> {
        render(<NavBar/>)
        
        expect(screen.getAllByText(/Anime/i).length).toBeGreaterThan(0)
    })

    test('abre o menu quando clicado', ()=> {
        render(<NavBar/>)
        
        const menuButton = screen.getAllByAltText('menu')[0]

        fireEvent.click(menuButton)

        expect(screen.getAllByText(/Animes/i).length).toBeGreaterThan(0)
    })

    test('verifica os links', ()=> {
        render(<NavBar/>)

        expect(screen.getAllByRole('link').length).toBeGreaterThan(0)
    })

    test('verifica input de pesquisa', ()=> {
        render(<NavBar/>)

        const searchInput = screen.getAllByPlaceholderText(/search products.../i)[0]

        fireEvent.change(searchInput, {
            target: { value: 'naruto'}
        })

        expect(searchInput).toHaveValue('naruto')
        
    })
})