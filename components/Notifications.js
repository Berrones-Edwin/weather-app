import { MenuList, MenuItem } from '@chakra-ui/react'

const Notifications = ({ alerts }) => {
  return (
    <MenuList alignItems={'center'}>
      {alerts.map((a) => (
        <MenuItem key={a.expires + a.effective}>{a.headline}</MenuItem>
      ))}
    </MenuList>
  )
}

export default Notifications
