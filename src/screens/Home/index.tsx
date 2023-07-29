import { useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {
  Participant,
  existingParticipantAlert,
  removeParticipantAlert,
} from '../../components'
import { styles } from './styles'

export function Home() {
  const [participants, setParticipants] = useState<Array<string>>([])
  const [participantName, setParticipantName] = useState('')

  function handleParcipantAdd() {
    if (participants.includes(participantName)) {
      return existingParticipantAlert()
    }

    setParticipants((prevState) => [...prevState, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    removeParticipantAlert({
      name,
      onRemove: () =>
        setParticipants((prevState) =>
          prevState.filter((participant) => participant !== name),
        ),
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
          value={participantName}
          onChangeText={setParticipantName}
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
