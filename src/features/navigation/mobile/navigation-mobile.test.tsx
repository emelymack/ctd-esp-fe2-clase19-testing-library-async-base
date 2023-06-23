import { act, render, screen } from "@testing-library/react";
import NavMobile from "./navigation-mobile.component"
import { LanguageProvider } from "features/language";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "store/store";

describe("Mobile navigation component", () => {
  beforeEach(() => {
    window.innerWidth = 400;
    window.innerHeight = 500;
    act(() => {
      window.dispatchEvent(new Event('resize'))
    })

    render(
      <Provider store={store}>
        <BrowserRouter>
          <LanguageProvider>
            <NavMobile />
          </LanguageProvider>
        </BrowserRouter>
      </Provider>
    );

    const hamburgerBtn = screen.getByRole('button')
    expect(hamburgerBtn).toBeInTheDocument()
  })

  it("Should not render menu at the beginning", () =>{ 
    expect(screen.queryByText('Following')).not.toBeInTheDocument()
  })

  it("Should render menu on clicking hambuger menu", async () => {
    const hamburgerBtn = screen.getByRole('button')
    
    act(() => { userEvent.click(hamburgerBtn) })

    const HomeLink = await screen.findByText('Home')
    const FollowingLink = await screen.findByText('Following')
    const searchInput = await screen.findByPlaceholderText('Search...')
    expect(HomeLink).toBeInTheDocument()
    expect(FollowingLink).toBeInTheDocument()
    expect(searchInput).toBeVisible()
  })
})