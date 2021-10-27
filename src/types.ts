import { ChangeEventHandler, FocusEventHandler, HTMLAttributes } from 'react';

export interface versusTileProps {
  team1: string;
  team2: string;
  team1Image: string;
  team2Image: string;
  date: string;
  time: string;
}

export interface upcomingMatchProps {
  matches: {
    team1: string;
    team2: string;
    team1Image: string;
    team2Image: string;
    date: string;
    time: string;
    _id: string;
  }[];
}

export interface authContextTypes {
  login: (token: string, isAdmin: boolean, expiresOn: string) => void;
  logout: () => void;
  token: string | null;
  isAdmin: boolean;
}

export interface InputProps {
  label: string | undefined;
  type: string | undefined;
  value: number | string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  style: HTMLAttributes<HTMLInputElement>;
  placeholder: string | undefined;
}

export interface LeaderboardProps {
  competitors:{
    name: string;
    pos: number;
    points: number;
  }[];
  prevWinners:{
    name: string;
    pos: number;
    points: number;
  }[];
  currMonth: string;
  currWeek: string;
  prevMonth: string;
  prevWeek: string;
}
