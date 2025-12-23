import type { Service } from "../../interface/service-interface";

export const serviceMock: Service[] = [
    {
    id: 1,
    name: 'API Gateway',
    port: 8080,
    lastStarted: '2025-12-23T08:30:00Z',
    status: true
  },
  {
    id: 2,
    name: 'Auth Service',
    port: 3000,
    lastStarted:  '2025-12-23T08:31:15Z',
    status: true
  },
  {
    id: 3,
    name: 'Database Service',
    port: 5432,
    lastStarted: '2025-12-23T08:29:45Z',
    status: true
  },
  {
    id: 4,
    name: 'Cache Redis',
    port: 6379,
    lastStarted: '2025-12-22T14:20:00Z',
    status:  false
  },
  {
    id: 5,
    name: 'Email Service',
    port: 2525,
    lastStarted:  '2025-12-23T09:00:00Z',
    status: true
  },
  {
    id:  6,
    name: 'File Storage',
    port: 9000,
    lastStarted:  '2025-12-23T08:35:30Z',
    status: true
  },
  {
    id: 7,
    name: 'Message Queue',
    port: 5672,
    lastStarted:  '2025-12-21T16:45:00Z',
    status: false
  },
  {
    id: 8,
    name: 'Monitoring Service',
    port: 9090,
    lastStarted:  '2025-12-23T08:28:00Z',
    status:  true
  },
  {
    id: 9,
    name: 'Payment Gateway',
    port: 8081,
    lastStarted: '2025-12-23T09:15:00Z',
    status: true
  },
  {
    id:  10,
    name: 'Search Engine',
    port: 9200,
    lastStarted: '2025-12-20T10:00:00Z',
    status: false
  }
]