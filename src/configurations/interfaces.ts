import React from 'react'

// Atoms Components Props

export interface TextProps {
  children: React.ReactNode
  [x: string]: any
}

export interface ButtonProps {
  children: React.ReactNode
  [x: string]: any
}

export interface ChipProps {
  children: React.ReactNode
}

export interface ImgProps {
  src: string
  alt: string
  [x: string]: any
}

export interface InputProps {
  type: string
  [x: string]: any
}

interface MuiOption {
  value: any
  label: string
}

export interface MuiSelectProps {
  options: Array<MuiOption>
  [x: string]: any
}

// Molecules Components Props

export interface InfoLineProps {
  label: string
  value: string
}

export interface InfoBlockProps {
  data: Array<InfoLineProps>
}

export interface SearchInputProps {
  setCountriesByName: Function
}

export interface SelectFilterProps {
  setCountriesByRegion: Function
}

export interface ChipListProps {
  data: Array<string>
}

// Organisms Components Props

export interface CountriesFilterProps {
  setCountriesByName: Function
  setCountriesByRegion: Function
}

export interface CountriesListProps {
  data: Array<CountryModel>
}

export interface CountryCardProps {
  data: CountryModel
}

export interface CountryDetailsBoxProps {
  data: CountryModel
}

// Templates Components Props

export interface CountriesBoardProps {
  data: Array<any>
  setCountriesByName: Function
  setCountriesByRegion: Function
}

export interface CountryDetailsProps {
  data: CountryModel
}

// Data Model

export interface CountryModel {
  name: string
  topLevelDomain: Array<string>
  alpha2Code: string
  alpha3Code: string
  callingCodes: Array<string>
  capital: string
  altSpellings: Array<string>
  subregion: string
  region: string
  population: number
  latlng: Array<number>
  demonym: string
  area: number
  timezones: Array<string>
  borders: Array<string>
  nativeName: string
  numericCode: string
  flags: Flag
  currencies: Array<Currency>
  languages: Array<Language>
  flag: string
  regionalBlocs: Array<Bloc>
  cioc: string
  independent: boolean
}

interface Flag {
  svg: string
  png: string
}

interface Currency {
  code: string
  name: string
  symbol: string
}

interface Language {
  iso639_1: string
  iso639_2: string
  name: string
  nativeName: string
}

interface Bloc {
  acronym: string
  name: string
}
