import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Table,
  Search,
  Filter,
  RefreshCw,
  Download,
  Play,
  Server,
  Activity,
  BarChart3,
  TrendingUp,
  Users,
  Code2,
  GitBranch,
  Star,
  Award,
  Calendar,
} from "lucide-react";
import { stats } from "../data/portfolioData";

export const DatabaseStats = () => {
  const [activeTable, setActiveTable] = useState("achievements");
  const [isQuerying, setIsQuerying] = useState(false);
  const [queryResult, setQueryResult] = useState<any[]>([]);

  const tables = [
    {
      name: "achievements",
      description: "Academic and professional accomplishments",
      primaryKey: "achievement_id",
      schema: [
        {
          column: "achievement_id",
          type: "INT",
          constraint: "PRIMARY KEY AUTO_INCREMENT",
        },
        { column: "title", type: "VARCHAR(255)", constraint: "NOT NULL" },
        {
          column: "category",
          type: "ENUM('academic','coding','project')",
          constraint: "NOT NULL",
        },
        { column: "score", type: "DECIMAL(4,2)", constraint: "NULL" },
        { column: "date_achieved", type: "DATE", constraint: "NOT NULL" },
        { column: "verified", type: "BOOLEAN", constraint: "DEFAULT TRUE" },
      ],
      data: [
        {
          achievement_id: 1,
          title: "DSA Problems Solved",
          category: "coding",
          score: 250,
          date_achieved: "2024-01-15",
          verified: true,
        },
        {
          achievement_id: 2,
          title: "CGPA Score",
          category: "academic",
          score: 8.7,
          date_achieved: "2023-12-20",
          verified: true,
        },
        {
          achievement_id: 3,
          title: "Projects Completed",
          category: "project",
          score: 15,
          date_achieved: "2024-01-10",
          verified: true,
        },
        {
          achievement_id: 4,
          title: "Years of Learning",
          category: "academic",
          score: 3,
          date_achieved: "2021-08-01",
          verified: true,
        },
      ],
    },
    {
      name: "skills",
      description: "Technical skills and proficiency levels",
      primaryKey: "skill_id",
      schema: [
        {
          column: "skill_id",
          type: "INT",
          constraint: "PRIMARY KEY AUTO_INCREMENT",
        },
        { column: "name", type: "VARCHAR(100)", constraint: "NOT NULL UNIQUE" },
        { column: "category", type: "VARCHAR(50)", constraint: "NOT NULL" },
        {
          column: "proficiency",
          type: "INT",
          constraint: "CHECK (proficiency BETWEEN 1 AND 100)",
        },
        {
          column: "years_experience",
          type: "DECIMAL(3,1)",
          constraint: "NULL",
        },
        { column: "last_used", type: "DATE", constraint: "NOT NULL" },
      ],
      data: [
        {
          skill_id: 1,
          name: "React",
          category: "Frontend",
          proficiency: 90,
          years_experience: 2.5,
          last_used: "2024-01-15",
        },
        {
          skill_id: 2,
          name: "Node.js",
          category: "Backend",
          proficiency: 85,
          years_experience: 2.0,
          last_used: "2024-01-14",
        },
        {
          skill_id: 3,
          name: "Python",
          category: "Programming",
          proficiency: 88,
          years_experience: 3.0,
          last_used: "2024-01-12",
        },
        {
          skill_id: 4,
          name: "Java",
          category: "Programming",
          proficiency: 82,
          years_experience: 2.5,
          last_used: "2024-01-10",
        },
        {
          skill_id: 5,
          name: "MongoDB",
          category: "Database",
          proficiency: 80,
          years_experience: 1.5,
          last_used: "2024-01-13",
        },
      ],
    },
    {
      name: "projects",
      description: "Portfolio projects and their metrics",
      primaryKey: "project_id",
      schema: [
        {
          column: "project_id",
          type: "INT",
          constraint: "PRIMARY KEY AUTO_INCREMENT",
        },
        { column: "name", type: "VARCHAR(255)", constraint: "NOT NULL" },
        {
          column: "status",
          type: "ENUM('active','completed','archived')",
          constraint: "DEFAULT 'active'",
        },
        {
          column: "complexity",
          type: "ENUM('low','medium','high')",
          constraint: "NOT NULL",
        },
        { column: "stars", type: "INT", constraint: "DEFAULT 0" },
        { column: "commits", type: "INT", constraint: "DEFAULT 0" },
        {
          column: "created_at",
          type: "TIMESTAMP",
          constraint: "DEFAULT CURRENT_TIMESTAMP",
        },
      ],
      data: [
        {
          project_id: 1,
          name: "E-Commerce Platform",
          status: "completed",
          complexity: "high",
          stars: 42,
          commits: 156,
          created_at: "2023-09-15",
        },
        {
          project_id: 2,
          name: "Task Management App",
          status: "completed",
          complexity: "medium",
          stars: 28,
          commits: 89,
          created_at: "2023-11-20",
        },
        {
          project_id: 3,
          name: "Weather Dashboard",
          status: "completed",
          complexity: "low",
          stars: 15,
          commits: 34,
          created_at: "2023-08-10",
        },
        {
          project_id: 4,
          name: "Chat Application",
          status: "active",
          complexity: "medium",
          stars: 7,
          commits: 23,
          created_at: "2024-01-05",
        },
      ],
    },
  ];

  const queries = [
    {
      description: "Get all achievements with high scores",
      sql: "SELECT * FROM achievements WHERE score > 50 ORDER BY score DESC;",
    },
    {
      description: "Find top programming skills by proficiency",
      sql: "SELECT name, proficiency FROM skills WHERE category = 'Programming' ORDER BY proficiency DESC LIMIT 3;",
    },
    {
      description: "Count projects by complexity level",
      sql: "SELECT complexity, COUNT(*) as project_count FROM projects GROUP BY complexity;",
    },
    {
      description: "Get skills used in the last month",
      sql: "SELECT name, category, proficiency FROM skills WHERE last_used >= DATE_SUB(CURDATE(), INTERVAL 30 DAY);",
    },
  ];

  const [selectedQuery, setSelectedQuery] = useState(0);

  const executeQuery = () => {
    setIsQuerying(true);

    setTimeout(() => {
      const currentTable = tables.find((t) => t.name === activeTable);
      if (currentTable) {
        // Simulate query execution based on selected query
        let result = [...currentTable.data];

        // Apply basic filtering based on query
        if (selectedQuery === 0 && activeTable === "achievements") {
          result = result
            .filter((item: any) => item.score > 50)
            .sort((a: any, b: any) => b.score - a.score);
        } else if (selectedQuery === 1 && activeTable === "skills") {
          result = result
            .filter((item: any) => item.category === "Programming")
            .sort((a: any, b: any) => b.proficiency - a.proficiency)
            .slice(0, 3);
        }

        setQueryResult(result);
      }
      setIsQuerying(false);
    }, 1500);
  };

  useEffect(() => {
    // Auto-execute query when table changes
    executeQuery();
  }, [activeTable]);

  const currentTable = tables.find((t) => t.name === activeTable) || tables[0];

  const getTypeColor = (type: string) => {
    if (type.includes("INT")) return "text-[#569cd6]";
    if (type.includes("VARCHAR")) return "text-[#ce9178]";
    if (type.includes("ENUM")) return "text-[#4ec9b0]";
    if (type.includes("DECIMAL")) return "text-[#b5cea8]";
    if (type.includes("BOOLEAN")) return "text-[#569cd6]";
    if (type.includes("DATE") || type.includes("TIMESTAMP"))
      return "text-[#dcdcaa]";
    return "text-[#d4d4d4]";
  };

  return (
    <motion.section
      className="py-20 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Database Management Interface */}
        <div className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-[#2d2d2d] border-b border-[#3c3c3c] px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Database className="w-8 h-8 text-[#4fc3f7]" />
                <div>
                  <h1 className="text-xl font-bold text-[#d4d4d4]">
                    portfolio_db - MySQL Workbench
                  </h1>
                  <p className="text-[#969696] text-sm">
                    Connected to localhost:3306 • Stats & Analytics Database
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-[#4fc3f7] text-sm">
                  <Activity className="w-4 h-4" />
                  <span>Connected</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-0">
            {/* Left Panel - Tables */}
            <div className="bg-[#252526] border-r border-[#3c3c3c] min-w-0">
              <div className="p-4">
                <div className="flex items-center gap-2 mb-4 text-[#d4d4d4] font-medium">
                  <Server className="w-4 h-4" />
                  <span>Tables</span>
                </div>

                <div className="space-y-1">
                  {tables.map((table) => (
                    <button
                      key={table.name}
                      onClick={() => setActiveTable(table.name)}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded transition-colors ${
                        activeTable === table.name
                          ? "bg-[#37373d] text-[#ffffff]"
                          : "text-[#cccccc] hover:bg-[#2a2d2e]"
                      }`}
                    >
                      <Table className="w-4 h-4" />
                      <span>{table.name}</span>
                      <span className="ml-auto text-xs text-[#969696]">
                        {table.data.length}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Table Info */}
                <div className="mt-6 p-3 bg-[#1e1e1e] border border-[#3c3c3c] rounded">
                  <h4 className="text-[#d4d4d4] font-medium text-sm mb-2">
                    Table Info
                  </h4>
                  <div className="text-xs text-[#969696] space-y-1">
                    <div>Rows: {currentTable.data.length}</div>
                    <div>Columns: {currentTable.schema.length}</div>
                    <div>Primary Key: {currentTable.primaryKey}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Panel - Schema */}
            <div className="bg-[#1e1e1e] border-r border-[#3c3c3c] min-w-0">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#d4d4d4] font-medium">
                    Schema: {currentTable.name}
                  </h3>
                  <button
                    onClick={() =>
                      setSelectedQuery((selectedQuery + 1) % queries.length)
                    }
                    className="text-[#4fc3f7] hover:text-[#81c784] text-sm"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-xs text-[#969696] mb-4">
                  {currentTable.description}
                </div>

                {/* Schema Table */}
                <div className="overflow-x-auto">
                  <div className="min-w-[480px] bg-[#0c0c0c] border border-[#3c3c3c] rounded overflow-hidden">
                    <table className="w-full text-xs">
                      <thead className="bg-[#2d2d2d]">
                        <tr>
                          <th className="px-3 py-2 text-left text-[#d4d4d4] font-medium">
                            Column
                          </th>
                          <th className="px-3 py-2 text-left text-[#d4d4d4] font-medium">
                            Type
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentTable.schema.map((column, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="border-t border-[#3c3c3c] hover:bg-[#252526]"
                          >
                            <td className="px-3 py-2">
                              <div className="flex items-center gap-2">
                                <span className="text-[#dcdcaa]">
                                  {column.column}
                                </span>
                                {column.constraint.includes("PRIMARY KEY") && (
                                  <span className="bg-[#f9c23c] text-black text-xs px-1 rounded">
                                    PK
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="px-3 py-2">
                              <span className={getTypeColor(column.type)}>
                                {column.type}
                              </span>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="bg-[#0c0c0c] border border-[#3c3c3c] rounded p-2 text-center">
                    <div className="text-lg font-bold text-[#4fc3f7]">
                      {currentTable.data.length}
                    </div>
                    <div className="text-xs text-[#969696]">Total Records</div>
                  </div>
                  <div className="bg-[#0c0c0c] border border-[#3c3c3c] rounded p-2 text-center">
                    <div className="text-lg font-bold text-[#81c784]">
                      {currentTable.schema.length}
                    </div>
                    <div className="text-xs text-[#969696]">Columns</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Query & Results */}
            <div className="bg-[#1e1e1e]">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#d4d4d4] font-medium">Query Editor</h3>
                  <button
                    onClick={executeQuery}
                    disabled={isQuerying}
                    className="flex items-center gap-1 px-3 py-1 bg-[#4fc3f7] hover:bg-[#29b6f6] text-black text-sm rounded transition-colors disabled:opacity-50"
                  >
                    {isQuerying ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                    Execute
                  </button>
                </div>

                {/* Query Selector */}
                <div className="mb-4">
                  <select
                    value={selectedQuery}
                    onChange={(e) => setSelectedQuery(Number(e.target.value))}
                    className="w-full bg-[#2d2d2d] border border-[#3c3c3c] text-[#d4d4d4] text-xs p-2 rounded"
                  >
                    {queries.map((query, index) => (
                      <option key={index} value={index}>
                        {query.description}
                      </option>
                    ))}
                  </select>
                </div>

                {/* SQL Query */}
                <div className="bg-[#0c0c0c] border border-[#3c3c3c] rounded mb-4">
                  <div className="bg-[#2d2d2d] border-b border-[#3c3c3c] px-3 py-2">
                    <span className="text-[#d4d4d4] text-xs font-mono">
                      query.sql
                    </span>
                  </div>
                  <div className="p-3 font-mono text-xs">
                    <pre className="text-[#d4d4d4] whitespace-pre-wrap">
                      {queries[selectedQuery]?.sql}
                    </pre>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-[#0c0c0c] border border-[#3c3c3c] rounded">
                  <div className="bg-[#2d2d2d] border-b border-[#3c3c3c] px-3 py-2 flex items-center justify-between">
                    <span className="text-[#d4d4d4] text-xs font-medium">
                      Results ({queryResult.length} rows)
                    </span>
                    {queryResult.length > 0 && (
                      <button className="text-[#4fc3f7] hover:text-[#81c784] text-xs">
                        <Download className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                  <div className="max-h-64 overflow-auto">
                    {isQuerying ? (
                      <div className="p-8 text-center">
                        <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-[#4fc3f7]" />
                        <div className="text-[#969696] text-sm">
                          Executing query...
                        </div>
                      </div>
                    ) : queryResult.length > 0 ? (
                      <div className="overflow-x-auto">
                        <div className="min-w-[480px]">
                          <table className="w-full text-xs">
                            <thead className="bg-[#252526] sticky top-0">
                              <tr>
                                {Object.keys(queryResult[0]).map((key) => (
                                  <th
                                    key={key}
                                    className="px-3 py-2 text-left text-[#d4d4d4] font-medium"
                                  >
                                    {key}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {queryResult.map((row, index) => (
                                <motion.tr
                                  key={index}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: index * 0.05 }}
                                  className="border-t border-[#3c3c3c] hover:bg-[#252526]"
                                >
                                  {Object.values(row).map(
                                    (value: any, cellIndex) => (
                                      <td
                                        key={cellIndex}
                                        className="px-3 py-2 text-[#cccccc]"
                                      >
                                        {typeof value === "boolean"
                                          ? value
                                            ? "✓"
                                            : "✗"
                                          : String(value)}
                                      </td>
                                    ),
                                  )}
                                </motion.tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ) : (
                      <div className="p-8 text-center text-[#969696] text-sm">
                        No results to display
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
