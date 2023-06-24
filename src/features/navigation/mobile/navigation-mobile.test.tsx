import { act, render, screen } from "@testing-library/react";
import NavMobile from "./navigation-mobile.component"
import { LanguageProvider } from "features/language";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "store/store";

const linksText = ['Home', 'Following']
describe("NavMobile component", () => {
  beforeEach(() => {
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LanguageProvider>
              <NavMobile />
            </LanguageProvider>
          </BrowserRouter>
        </Provider>
      );
    })

    const hamburgerBtn = screen.getByRole('button')
    expect(hamburgerBtn).toBeInTheDocument()
  })

  it("Should not render menu at the beginning", () =>{ 
    linksText.forEach((link) => {
      expect(screen.queryByText(link)).not.toBeInTheDocument()
    })
  })

  it("Should render menu on clicking hambuger menu", async () => {
    const hamburgerBtn = screen.getByRole('button')

    act(() => { userEvent.click(hamburgerBtn) })
    const searchInput = await screen.findByPlaceholderText('Search...')

    linksText.forEach((link) => {
      expect(screen.queryByText(link)).toBeInTheDocument()
    })
    expect(searchInput).toBeVisible()
  })
})