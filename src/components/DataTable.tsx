import React, { useMemo, useState } from 'react'

export interface Column<T> {
  key: string
  title: string
  dataIndex: keyof T
  sortable?: boolean
  render?: (value: any, record: T, index: number) => React.ReactNode
  width?: string
}

export interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  loading?: boolean
  selectable?: boolean
  multiple?: boolean // optional: if true, allow multiple selection; otherwise single-select
  onRowSelect?: (selectedRows: T[]) => void
  emptyText?: string
  className?: string
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  loading = false,
  selectable = false,
  multiple = false,
  onRowSelect,
  emptyText = 'No records found',
  className = '',
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null)
  const [sortDir, setSortDir] = useState<'asc' | 'desc' | null>(null)
  const [selected, setSelected] = useState<Set<number>>(new Set())

  const sortedData = useMemo(() => {
    if (!sortKey || !sortDir) return data
    const col = columns.find(c => c.key === sortKey)
    if (!col) return data
    const idx = col.dataIndex
    const copy = [...data]
    copy.sort((a, b) => {
      const av = a[idx]
      const bv = b[idx]
      if (av == null && bv == null) return 0
      if (av == null) return -1
      if (bv == null) return 1
      if (typeof av === 'number' && typeof bv === 'number') return av - bv
      const sa = String(av)
      const sb = String(bv)
      return sa.localeCompare(sb)
    })
    if (sortDir === 'desc') copy.reverse()
    return copy
  }, [data, sortKey, sortDir, columns])

  const toggleSort = (key: string, sortable?: boolean) => {
    if (!sortable) return
    if (sortKey !== key) {
      setSortKey(key)
      setSortDir('asc')
    } else if (sortDir === 'asc') setSortDir('desc')
    else setSortDir(null), setSortKey(null)
  }

  const toggleRow = (index: number) => {
    const next = new Set(selected)
    if (multiple) {
      if (next.has(index)) next.delete(index)
      else next.add(index)
    } else {
      // single selection: toggle the clicked row, clear others
      if (next.has(index)) next.clear()
      else next.clear(), next.add(index)
    }
    setSelected(next)
    notifySelection(next)
  }

  const toggleAll = () => {
    if (!multiple) return
    if (selected.size === sortedData.length) {
      const next = new Set<number>()
      setSelected(next)
      notifySelection(next)
    } else {
      const next = new Set<number>(sortedData.map((_, i) => i))
      setSelected(next)
      notifySelection(next)
    }
  }

  const notifySelection = (sel: Set<number>) => {
    if (!onRowSelect) return
    const rows = Array.from(sel).map(i => sortedData[i])
    onRowSelect(rows)
  }

  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <div className="min-w-[640px] bg-[var(--surface)] rounded-lg shadow-input-md border border-[var(--border)]">
  <table className="w-full table-fixed" role="table" aria-label="data table">
          <thead>
            <tr className="text-left text-sm text-[var(--muted)]">
              {selectable && (
                <th className="px-4 py-3 w-12">
                  {multiple ? (
                    <input
                      type="checkbox"
                      checked={selected.size === sortedData.length && sortedData.length > 0}
                      onChange={toggleAll}
                      aria-label="select all"
                    />
                  ) : null}
                </th>
              )}

              {columns.map(col => (
                <th
                  key={col.key}
                  scope="col"
                  role="columnheader"
                  aria-sort={sortKey === col.key ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'}
                  tabIndex={col.sortable ? 0 : undefined}
                  onKeyDown={(e) => {
                    if (col.sortable && (e.key === 'Enter' || e.key === ' ')) toggleSort(col.key, col.sortable)
                  }}
                  className={`px-4 py-3 ${col.sortable ? 'cursor-pointer select-none' : ''}`}
                  style={{ width: col.width }}
                  onClick={() => toggleSort(col.key, col.sortable)}
                >
                  <div className="flex items-center gap-2">
                    <span>{col.title}</span>
                    {col.sortable && sortKey === col.key && (
                      <span className="text-xs text-[var(--muted)]">{sortDir === 'asc' ? '▲' : '▼'}</span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={columns.length + (selectable ? 1 : 0)} className="px-4 py-8 text-center">
                  <div className="flex items-center justify-center gap-2 text-[var(--muted)]">
                    <div className="spinner w-5 h-5 text-[var(--muted)]" />
                    Loading...
                  </div>
                </td>
              </tr>
            ) : sortedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (selectable ? 1 : 0)} className="px-4 py-8 text-center text-[var(--muted)]">
                  {emptyText}
                </td>
              </tr>
            ) : (
              sortedData.map((row, rowIndex) => {
                const isSelected = selected.has(rowIndex)
                return (
                  <tr
                    key={rowIndex}
                    className={`border-t border-[var(--border)] hover:bg-[rgba(79,70,229,0.03)] ${isSelected ? 'bg-[rgba(79,70,229,0.06)]' : ''}`}
                  >
                    {selectable && (
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleRow(rowIndex)}
                          aria-label={`select row ${rowIndex + 1}`}
                        />
                      </td>
                    )}

                    {columns.map((col, colIndex) => (
                      <td key={colIndex} className="px-4 py-3 align-top text-sm text-[var(--text)]" role="cell">
                        {col.render ? col.render(row[col.dataIndex], row, rowIndex) : String(row[col.dataIndex] ?? '')}
                      </td>
                    ))}
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DataTable
