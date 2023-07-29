import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'
import { existingParticipantAlert } from '../../components/ExistingParticipantAlert'
import { removeParticipantAlert } from '../../components/RemoveParticipantAlert'

export function Home() {
  const participants: Array<string> = [
    'Luis Fernando',
    'Maria Clara',
    'Gabriela',
  ]

  function handleParcipantAdd() {
    if (participants.includes('Luis Fernando')) {
      existingParticipantAlert()
    }
  }

  function handleParticipantRemove(name: string) {
    removeParticipantAlert({
      name,
      onRemove: () => console.log('Participante removido'),
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParcipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  )
}
