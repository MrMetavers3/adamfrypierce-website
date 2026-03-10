import { ArrowUpRight } from 'lucide-react'

const ARTICLES = [
  { title: '35 Forward', href: 'https://adamfrypierce.medium.com/35-forward-ac12a5f89a1d' },
  // TODO: replace with exact article URL once confirmed
  { title: '5 Keys to Scaling DesignOps', href: 'https://adamfrypierce.medium.com/' },
]

const TALKS = [
  { title: 'Lessons from 1000 Design Leaders on Hiring', href: 'https://www.youtube.com/watch?v=EKozJubSiQc' },
  { title: 'Building DesignOps', href: 'https://www.youtube.com/watch?v=tYb1aW82sDw' },
  { title: 'The First 90 Days of the Head of DesignOps', href: 'https://www.youtube.com/watch?v=mjRPk2faqKw' },
  { title: 'The Case For DesignOps: How to Identify If You Need It', href: 'https://www.youtube.com/watch?v=CNnqSL97aLE' },
  { title: 'Scaling DesignOps from 1 to Many', href: 'https://www.youtube.com/watch?v=CNnqSL97aLE' },
]

const REPORTS = [
  { title: '2024 DesignOps Benchmarking Report', href: null },
  { title: '2023 DesignOps Benchmarking Report', href: null },
  { title: '2021 Design Leadership Trend Report', href: null },
  { title: '2020 Design Leadership Salary Report', href: null },
  { title: '2020 Unbroken Chains of Alignment', href: null },
]

interface ListItem {
  title: string
  href: string | null
}

function PublicationList({ items }: { items: ListItem[] }) {
  return (
    <ul className="flex flex-col">
      {items.map(({ title, href }) =>
        href ? (
          <li key={title}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-4 border-b border-border hover:border-primary/40 transition-colors"
            >
              <span className="text-base font-medium group-hover:text-primary transition-colors">{title}</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-4" />
            </a>
          </li>
        ) : (
          <li key={title} className="flex items-center py-4 border-b border-border">
            <span className="text-base font-medium">{title}</span>
          </li>
        )
      )}
    </ul>
  )
}

export default function Publications() {
  return (
    <section id="publications" className="py-24 px-8 md:px-16 lg:px-24 border-t border-border">
      <div className="max-w-3xl">
        <h2 className="text-xs font-medium text-primary uppercase tracking-widest mb-16">
          Publications
        </h2>

        <div className="flex flex-col gap-16">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-4">Articles</h3>
            <PublicationList items={ARTICLES} />
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-4">Talks</h3>
            <PublicationList items={TALKS} />
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-4">Reports</h3>
            <PublicationList items={REPORTS} />
          </div>
        </div>
      </div>
    </section>
  )
}
