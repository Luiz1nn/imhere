import { Alert } from 'react-native'

type Props = {
  name: string
  onRemove: () => void
}
export function removeParticipantAlert({ name, onRemove }: Props) {
  return Alert.alert('Remover', `Remover o participante ${name}`, [
    {
      text: 'Sim',
      onPress: () => onRemove(),
    },
    {
      text: 'Não',
      style: 'cancel',
    },
  ])
}
