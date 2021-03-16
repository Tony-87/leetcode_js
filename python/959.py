class Solution(object):
    def regionsBySlashes(self, grid):
        """
        :type grid: List[str]
        :rtype: int
        """
        self.N = len(grid)
        m_ = range(self.N * self.N * 4)
        self.count = self.N * self.N * 4
        for row in range(self.N):
            line = grid[row]
            for col in range(self.N):
                w = line[col]
                if row > 0:
                    self.union(m_, self.position(row - 1, col, 2), self.position(row, col, 0))
                if col > 0:
                    self.union(m_, self.position(row, col - 1, 1), self.position(row, col, 3))
                if w != '/':
                    self.union(m_, self.position(row, col, 0), self.position(row, col, 1))
                    self.union(m_, self.position(row, col, 3), self.position(row, col, 2))
                if w != '\\':
                    self.union(m_, self.position(row, col, 0), self.position(row, col, 3))
                    self.union(m_, self.position(row, col, 1), self.position(row, col, 2))
        return self.count

    def find(self, m_, a):
        if m_[a] == a:
            return a
        return self.find(m_, m_[a])
    
    def union(self, m_, a, b):
        pa = self.find(m_, a)
        pb = self.find(m_, b)
        if (pa == pb):
            return
        m_[pa] = pb
        self.count -= 1
    
    def position(self, r, c, i):
        return (r * self.N + c) * 4 + i