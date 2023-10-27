import { ParentInterface } from 'interfaces/parent';
import { UserInterface } from 'interfaces/user';
import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface StudentInterface {
  id?: string;
  user_id: string;
  school_id: string;
  grade_level: string;
  enrollment_date: any;
  graduation_date?: any;
  major?: string;
  created_at?: any;
  updated_at?: any;
  parent?: ParentInterface[];
  user?: UserInterface;
  school?: SchoolInterface;
  _count?: {
    parent?: number;
  };
}

export interface StudentGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  school_id?: string;
  grade_level?: string;
  major?: string;
}
