import { Alert } from 'react-native'

export function existingParticipantAlert() {
  return Alert.alert(
    'Participante existe',
    'Já existe um participante na lista com esse nome.',
  )
}
