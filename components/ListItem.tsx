import React from 'react';
import Link from 'next/link';

import { User } from '../interfaces';

type Props = {
  data: User;
};

const ListItem = ({ data }: Props): React.ReactElement => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a href="asdf">
      {data.id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
