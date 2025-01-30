import { View, Text } from 'react-native'
import React from 'react'


const SignalsTabForCoinDetail = () => {

    const isSingIn = true;
    const selectedIndcatorById = true;

    if(!isSingIn) {
        return (
            <View className='border-hairline border-zinc-300 p-3 rounded-md shadow-slate-500' >
                <Text className='text-md font-semibold'>  Криптоиндикатор - мы поможем тебе эфективно и удобно получать сигналы на изминения тренда!</Text>
                <Text className='text-md '>Мы используем базовые индикатора рынка, которые вы можете кастомизировать под вашу стратегию и получать сигналы</Text>
                <Text>Так же вы можете использовать наш унимальный индикатор CryptoIndicatorPro -  который использует AI в сочитание с индикаторами </Text>
            </View>
        )
    }
  return (
    <View>
      {selectedIndcatorById ? 
      <View>
        <Text>Выводим название индикатора и ниже сигналы, отдельный бордер с блоком! При клике индикатор, мы попадаем в настройки наших индикаторов - это будет переходить в скрин индикаторы и там уже будет возможность найти коин, выбрать коин и добавить или убрать индикаторы</Text>
      </View> : 
      <Text>Если пользыватель авторизировался и у него обычный тарифный план, мы предлагам добавить в избранные монеты и попробовать наши индикаторы или кастомно настроить пары, которые будут интересны, так переходим на скнин индикаторов, где можно все добавить и настроить</Text>
    }
    </View>
  )
}

export default SignalsTabForCoinDetail