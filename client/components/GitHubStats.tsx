import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Code2, Star, GitFork, ExternalLink, TrendingUp, Award, Zap, Target } from "lucide-react";
import { githubStats, leetcodeStats, blogs } from '../data/portfolioData';




const StatCard = ({ icon: Icon, label, value, color, delay }: { 
  icon: any; label: string; value: string | number; color: string; delay: number 
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="glass p-6 rounded-xl text-center group hover:border-white/20 transition-all duration-300"
  >
    <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
      <Icon className="h-6 w-6 text-black" />
    </div>
    <div className="text-2xl font-bold text-white mb-1">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </motion.div>
);

const LanguageBar = ({ language, index }: { language: typeof githubStats.topLanguages[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="flex items-center gap-3 mb-3"
  >
    <div className="w-16 text-sm text-white font-medium">{language.name}</div>
    <div className="flex-1 bg-gray-700 rounded-full h-2 overflow-hidden">
      <motion.div
        className={`h-full ${language.color}`}
        initial={{ width: 0 }}
        whileInView={{ width: `${language.percentage}%` }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
      />
    </div>
    <div className="w-12 text-sm text-muted-foreground text-right">{language.percentage}%</div>
  </motion.div>
);

const RepoCard = ({ repo, index }: { repo: typeof githubStats.pinnedRepos[0]; index: number }) => (
  <motion.a
    href={repo.url} // Link to the repo
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ scale: 1.02, y: -3 }}
    className="glass p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group block"
  >
    <div className="flex items-start justify-between mb-3">
      <h3 className="text-lg font-semibold text-white group-hover:text-neon-blue transition-colors">
        {repo.name}
      </h3>
      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" />
    </div>
    <p className="text-muted-foreground text-sm mb-4">{repo.description}</p>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-1">
          <div className={`w-3 h-3 rounded-full ${repo.color.replace('text-', 'bg-')}`} />
          <span className="text-muted-foreground">{repo.language}</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-400" />
          <span className="text-muted-foreground">{repo.stars}</span>
        </div>
        <div className="flex items-center gap-1">
          <GitFork className="h-4 w-4 text-gray-400" />
          <span className="text-muted-foreground">{repo.forks}</span>
        </div>
      </div>
    </div>
  </motion.a>
);


const BlogCard = ({ blog, index }: { blog: typeof blogs[0]; index: number }) => (
  <motion.a
    href={blog.url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ scale: 1.02, y: -3 }}
    className="glass p-6 rounded-xl border border-white/10 hover:border-neon-blue/50 transition-all duration-300 group block"
  >
    <div className="flex items-start justify-between mb-3">
      <h3 className="text-lg font-semibold text-white group-hover:text-neon-blue transition-colors line-clamp-2">
        {blog.title}
      </h3>
      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-neon-blue transition-colors flex-shrink-0 ml-2" />
    </div>
    <div className="flex items-center gap-4 text-sm text-muted-foreground">
      <span className="text-neon-purple">{blog.platform}</span>
      <span>{blog.date}</span>
      <span>{blog.likes} likes</span>
      <span>{blog.comments} comments</span>
    </div>
  </motion.a>
);

export const GitHubStats = () => {
  const [activeTab, setActiveTab] = useState<'github' | 'leetcode' | 'blogs'>('github');

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-neon-green/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Coding Activity & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My coding journey reflected through GitHub contributions, LeetCode progress, and technical writing.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="glass rounded-xl p-2 flex gap-2">
            {['github', 'leetcode', 'blogs'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-neon-blue text-white'
                    : 'text-muted-foreground hover:text-white'
                }`}
              >
                {tab === 'github' && <Github className="h-4 w-4 inline mr-2" />}
                {tab === 'leetcode' && <Code2 className="h-4 w-4 inline mr-2" />}
                {tab === 'blogs' && <TrendingUp className="h-4 w-4 inline mr-2" />}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* GitHub Tab */}
        {activeTab === 'github' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* GitHub Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
              <StatCard icon={Github} label="Total Repos" value={githubStats.overview.totalRepos} color="bg-gray-600" delay={0.1} />
              {/* <StatCard icon={Star} label="Total Stars" value={githubStats.overview.totalStars} color="bg-yellow-500" delay={0.2} />
              <StatCard icon={GitFork} label="Total Forks" value={githubStats.overview.totalForks} color="bg-blue-500" delay={0.3} /> */}
              <StatCard icon={Code2} label="Commits" value={githubStats.overview.totalCommits+"+"} color="bg-green-500" delay={0.4} />
              {/* <StatCard icon={Zap} label="Current Streak" value={`${githubStats.overview.currentStreak}d`} color="bg-orange-500" delay={0.5} /> */}
              <StatCard icon={TrendingUp} label="Contributions" value={githubStats.overview.contributionsThisYear+ "+"} color="bg-purple-500" delay={0.6} />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Top Languages */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="glass p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Top Languages</h3>
                {githubStats.topLanguages.map((language, index) => (
                  <LanguageBar key={language.name} language={language} index={index} />
                ))}
              </motion.div>

              {/* Pinned Repositories */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Pinned Repositories</h3>
                <div className="space-y-4">
                  {githubStats.pinnedRepos.map((repo, index) => (
                    <RepoCard key={repo.name} repo={repo} index={index} />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* LeetCode Tab */}
        {activeTab === 'leetcode' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* LeetCode Stats */}
              <div className="glass p-8 rounded-2xl">
  <div className="flex items-center gap-3 mb-6">
    <Code2 className="h-8 w-8 text-neon-cyan" />
    <h3 className="text-2xl font-bold text-white">LeetCode Progress</h3>
  </div>

  <div className="grid grid-cols-2 gap-4 mb-6">
    <StatCard
      icon={Target}
      label="Total Solved"
      value={leetcodeStats.totalSolved}
      color="bg-neon-blue"
      delay={0.1}
    />
    {/* <StatCard
      icon={Award}
      label="Current Rating"
      value={leetcodeStats.rating}
      color="bg-neon-purple"
      delay={0.2}
    /> */}
  </div>

  <div className="grid grid-cols-2 gap-4 text-sm mb-6 text-white">
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-green-400">Easy</span>
        <span className="font-semibold">{leetcodeStats.easy}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-yellow-400">Medium</span>
        <span className="font-semibold">{leetcodeStats.medium}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-red-400">Hard</span>
        <span className="font-semibold">{leetcodeStats.hard}</span>
      </div>
    </div>

    <div className="space-y-2 text-xs">
      <div className="flex justify-between items-center">
        {/* <span className="text-zinc-400">Rank</span> */}
        {/* <span className="text-white font-medium">{leetcodeStats.rankTitle}</span> */}
      </div>
      <div className="flex justify-between items-center">
        <span className="text-zinc-400">Global Standing</span>
        <span className="text-white font-medium">{leetcodeStats.globalRankApprox}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-zinc-400">Acceptance Rate</span>
        <span className="text-white font-medium">{leetcodeStats.acceptanceRate}</span>
      </div>
    </div>
  </div>

  <div className="mt-6">
    <h4 className="text-lg font-semibold text-white mb-3">Badges</h4>
    <div className="flex flex-wrap gap-2">
      {leetcodeStats.badges.map((badge, index) => (
        <span
          key={index}
          className="bg-neon-cyan/20 text-neon-cyan px-3 py-1 rounded-full text-xs"
        >
          {badge}
        </span>
      ))}
    </div>
  </div>
</div>


              {/* Recent Submissions */}
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Recent Submissions</h3>
                <div className="space-y-4">
                  {leetcodeStats.recentSubmissions.map((submission, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg"
                    >
                      <div>
                        <h4 className="text-white font-medium">{submission.problem}</h4>
                        <span className={`text-sm ${
                          submission.difficulty === 'Easy' ? 'text-green-400' :
                          submission.difficulty === 'Medium' ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                          {submission.difficulty}
                        </span>
                      </div>
                      <span className="text-green-400 text-sm font-medium">{submission.status}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blogs Tab */}
        {activeTab === 'blogs' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Latest Technical Articles</h3>
              <p className="text-muted-foreground">Sharing knowledge and learning in public</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} index={index} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
