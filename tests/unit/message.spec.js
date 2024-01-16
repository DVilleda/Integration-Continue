import {render, screen, fireEvent} from '@testing-library/vue'
import Message from '@/components/Message'

test("changer l'affichage d'un élément p dans le DOM", async () =>{
    render(Message);

    const button = screen.getByText('Clique MOI !')
    await fireEvent.click(button)
    await fireEvent.click(button)
    expect(screen.queryByText('2222Un message Secret...').style).toHaveProperty(
        'display',
        'none'
    );
});
