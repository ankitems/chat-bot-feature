// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'

const HorizontalWithAvatar = props => {
  // Props
  const { stats, title, avatarIcon, avatarColor, avatarVariant, avatarSkin, avatarIconSize, avatarSize } = props

  return (
    <Card>
      <CardContent className='flex items-center justify-between gap-2'>
        <div className='flex flex-col gap-1'>
          <Typography variant='h5'>{stats}</Typography>
          <Typography variant='body2'>{title}</Typography>
        </div>
        <CustomAvatar variant={avatarVariant} skin={avatarSkin} color={avatarColor} size={avatarSize}>
          <i className={classnames(avatarIcon, `text-[${avatarIconSize}px]`)} />
        </CustomAvatar>
      </CardContent>
    </Card>
  )
}

export default HorizontalWithAvatar
