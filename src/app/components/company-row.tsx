import React from 'react';
import StatusLabel, { Status } from '@/app/components/status-label';
import Image from 'next/image';
import clsx from 'clsx';

export interface CompaniesProps {
  id: number;
  category: string;
  company: string;
  status: Status;
  promotions: boolean;
  country: string;
  joinedDate: string;
}

const labelByStatus = {
  [Status.Active]: 'Active',
  [Status.NotActive]: 'NotActive',
  [Status.Pending]: 'Pending',
  [Status.Suspended]: 'Suspended',
}

export default function CompanyRow({
  id,
  category,
  company,
  status,
  promotions,
  country,
  joinedDate,
}: CompaniesProps) {
  return (
    <tr className="h-1 text-center text-gray-900 bg-white">
      <td className="text-xs font-medium text-blue-700 rounded-1 border-1-4 border-blue-700">{category}</td>
      <td>
        <a href={`/companies/${id}`}>{company}</a>
      </td>
      <td>
        <StatusLabel status={status}>{labelByStatus[status]}</StatusLabel>
      </td>
      <td>
        <div  className="inline-flex items-center gap-1">
          <Image
            width={16}
            height={16}
            src={`/icons/${promotions ? 'check' : 'x-mark'}.svg`}
            alt="promotions icon"
          />
          <span
            className={clsx(
              'text-sm font-medium',
              promotions ? 'text-green-700':'text-red-700'
              )}
          >
            {promotions ? 'Yes' : 'No'}
          </span>
        </div>
      </td>
      <td>{country}</td>
      <td className="rounded-r">
        {new Date(joinedDate).toLocaleDateString('uk-UA')}
      </td>
    </tr>
  );
}

