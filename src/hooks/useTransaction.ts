import { useState, useEffect } from 'react';

enum RequestStatus {
  idle,
  pending,
  success,
  error,
}

interface ITransaction {}

interface IProps {
  page?: number;
}

export default function ({ page = 1 }: IProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [currentPage, setCurrentPage] = useState(page);
  const [status, setstatus] = useState(RequestStatus.idle);

  useEffect(() => {}, []);

  return { transactions, page, status };
}
