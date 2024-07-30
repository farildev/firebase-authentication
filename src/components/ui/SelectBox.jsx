import {  Field, Select } from '@headlessui/react'
import { GoChevronDown } from "react-icons/go";
import { genres } from '@/utils/constants';
import clsx from 'clsx'

export default function SelectBox({handleMovieGenre}) {
  const handleChange = (e) => {
    handleMovieGenre(e.target.value)
  }
  return (
    <div className="w-full">
      <Field className='w-full'>
        <div className="relative w-full flex items-center justify-between bg-white/5 rounded-lg border border-gray-300/20 p-3">
          <Select
            onChange={handleChange}
            className={clsx(
              'block w-full appearance-none rounded-lg border-none bg-transparent text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
              '*:text-black'
            )}
          >
            {
              genres.map((genre) =>(
                <option key={genre} value={genre}>{genre}</option>
              ))
            }
          </Select>
          <GoChevronDown
            className="group pointer-events-none size-4 fill-white/60"
            aria-hidden="true"
          />
        </div>
      </Field>
    </div>
  )
}
