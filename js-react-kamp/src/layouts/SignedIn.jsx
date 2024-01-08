import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, Image, MenuItem } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
        <MenuItem>
            <Image avatar spaced="right" src="https://fotolifeakademi.com/uploads/2020/04/manzara-fotografi-cekmek.jpg"/>
            <Dropdown pointing="top left" text='Merve'>
                <DropdownMenu>
                    <DropdownItem text="Bilgilerim" icon="info"/>
                    <DropdownItem onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                </DropdownMenu>
            </Dropdown>
        </MenuItem>
    </div>
  )
}
