import { ESHIKOYNA_LANGUAGE } from '../tools/constants'
import { ru } from './Ru'
import { uz } from './Uz'

export const getLanguage = () => {
  return localStorage.getItem(ESHIKOYNA_LANGUAGE)
}

export const getText = word => {
  return  getLanguage() === 'uz' ? uz[word] : ru[word]
}