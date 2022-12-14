import React from 'react'
import { Text, View, Pressable } from 'dripsy'
import Edit from './Edit'
import Interval from './Interval'
import Timer from './Timer'
import Header from './Header'
import { SafeAreaView, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useCountdown } from '../../hooks/useCountDown'
import { useStopWatch } from '../../hooks/useStopWatch'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function HomeScreen() {
  const [date, setDate] = React.useState(new Date())
  const targetDate = useCountdown(date)
  const {
    time,
    isRunning,
    start,
    stop,
    reset,
    lap,
    laps,
    currentLapTime,
    hasStarted,
    dataLoaded,
  } = useStopWatch(date)

  function handleAddDay() {
    setDate(new Date(date.getTime() + 86400000))
  }

  function handleSubtractDay() {
    setDate(new Date(date.getTime() - 86400000))
  }

  function handleSetToday() {
    setDate(new Date())
  }

  function handleClick() {
    if (isRunning) {
      stop()
    } else {
      start()
    }
  }

  function clearAsyncStorage() {
    console.log('clearing')
    AsyncStorage.clear()
  }

  async function getAllAsyncStorageKeys() {
    AsyncStorage.getAllKeys().then((keys) => console.log(keys))
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Header
          date={date}
          handleAddDay={handleAddDay}
          handleSetToday={handleSetToday}
          handleSubtractDay={handleSubtractDay}
        />

        <View
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '$background',
          }}
        >
          <View
            sx={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
              py: 20,
            }}
          >
            <Timer
              fontSizeLabel={12}
              fontSizeTime={16}
              label="Temp. Trabalhado"
              img={require('../../assets/blob/blob1.png')}
              time={time}
            />
            <Timer
              fontSizeLabel={12}
              fontSizeTime={16}
              label="Saldo Total"
              img={require('../../assets/blob/blob2.png')}
              time="5:14"
            />
          </View>
          <Timer
            fontSizeLabel={24}
            fontSizeTime={32}
            label="Saldo do Dia"
            img={require('../../assets/blob/blob3.png')}
            time="-1:14"
          />

          <View sx={{ py: 32, px: 32, width: '100%' }}>
            <Edit id="1" time="09:00 - 13:34" onPress={handleClick} />
            <Interval time="00:26" />
            <Edit id="2" time="09:00 -" onPress={clearAsyncStorage} />
          </View>
        </View>

        <View
          sx={{
            pb: 60,
            width: '100%',
            px: 32,
            flexDirection: 'row',
            alignItems: 'stretch',
          }}
        >
          <Pressable
            sx={{
              flex: 1,
              backgroundColor: '$caramel',
              borderRadius: 4,
              mr: 2,
              justifyContent: 'center',
            }}
            onPress={getAllAsyncStorageKeys}
          >
            <Text
              sx={{
                textAlign: 'center',
                width: '100%',
                fontSize: 24,
                fontWeight: 'bold',
                color: '$white',
              }}
            >
              + BATER PONTO
            </Text>
          </Pressable>
          <Pressable>
            <View sx={{ backgroundColor: '$caramel', p: 16, borderRadius: 4 }}>
              <Ionicons name="add-circle-outline" size={24} color="white" />
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
