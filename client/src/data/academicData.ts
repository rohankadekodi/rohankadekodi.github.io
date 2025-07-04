export const academicData = {
  personal: {
    name: "Rohan Kadekodi",
    title: "Postdoctoral Scholar",
    institution: "University of Washington",
    email: "rak@cs.utexas.edu",
    phone: "(412) 623-9509",
    address: {
      office: "CSE 358",
      street: "185 E Stevens Way NE",
      city: "Seattle, WA 98195"
    },
    links: {
      googleScholar: "https://scholar.google.com/citations?user=IVnxMOkAAAAJ&hl=en",
      github: "https://github.com/rohankadekodi",
      linkedin: "https://www.linkedin.com/in/rohan-kadekodi",
      website: "http://www.cs.utexas.edu/~rak"
    }
  },

  about: {
    bio: [
      "Rohan is a postdoctoral scholar at the University of Washington, working with Prof. Baris Kasikci. His research focuses on the intersection of distributed systems, storage systems, and virtualization, with particular expertise in tiered memory, byte-addressable storage, and file systems for persistent memory.",
      "Prior to joining UW, he completed his PhD at the University of Texas at Austin under the guidance of Prof. Vijay Chidambaram, where he developed innovative solutions for persistent memory file systems and key-value stores. His doctoral research focused on minimizing I/O bottlenecks in modern systems infrastructure for achieving high throughput and scalability.",
      "He obtained his Bachelor's degree with Honors in Computer Science and Engineering from the Pune Institute of Computer Technology, where he received recognition for academic excellence and contributions to research activities."
    ],
    interests: [
      "Tiered Memory",
      "Byte Addressable Storage", 
      "File and storage systems",
      "Key-value stores",
      "Virtualization",
      "Distributed systems"
    ]
  },

  education: [
    {
      degree: "PhD in Computer Science",
      institution: "University of Texas at Austin",
      location: "Austin, Texas",
      period: "2019 - 2023",
      advisor: "Prof. Vijay Chidambaram"
    },
    {
      degree: "Master's in Computer Science", 
      institution: "University of Texas at Austin",
      location: "Austin, Texas",
      period: "2017 - 2019",
      advisor: "Prof. Vijay Chidambaram"
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "Pune Institute of Computer Technology",
      location: "Pune, India", 
      period: "2012 - 2016"
    }
  ],

  experience: [
    {
      title: "Postdoctoral Scholar",
      organization: "University of Washington",
      location: "Seattle, USA",
      period: "Aug 2023 - Present",
      mentor: "Prof. Baris Kasikci"
    },
    {
      title: "Research Intern",
      organization: "Microsoft Research, Redmond",
      location: "Redmond, USA", 
      period: "May 2021 - Aug 2021",
      mentor: "Dr. Badrish Chandramouli"
    },
    {
      title: "Research Intern",
      organization: "Microsoft Research, Redmond",
      location: "Redmond, USA",
      period: "May 2020 - Aug 2020", 
      mentor: "Dr. Badrish Chandramouli"
    },
    {
      title: "Research Intern",
      organization: "Microsoft Research, India",
      location: "Bangalore, India",
      period: "May 2019 - Aug 2019",
      mentor: "Dr. Harsha Vardhan Simhadri"
    },
    {
      title: "Research Intern", 
      organization: "VMware Research",
      location: "Palo Alto, California",
      period: "May 2018 - Aug 2018",
      mentor: "Prof. Aasheesh Kolli"
    },
    {
      title: "Research Intern",
      organization: "University of Wisconsin, Madison", 
      location: "Madison, Wisconsin",
      period: "Jan 2017 - July 2017",
      mentor: "Prof. Remzi Arpaci-Dusseau and Prof. Vijay Chidambaram"
    }
  ],

  publications: [
    {
      title: "Y. Gu, I. Neal, J. Xu, SC Lee, A. Said, M. Haydar, J. Van Geffen, Rohan Kadekodi, B. Kasikci. Scalable and Accurate Application-Level Crash-Consistency Testing via Representative Testing.",
      venue: "Proceedings of the ACM on Programming Languages 9 (OOPSLA1), 477-506, 2025",
      year: 2025
    },
    {
      title: "Molly Jane Nicholas, Nicolai Marquardt, Michel Pahud, Nathalie Riche, Hugo Romat, Christopher Collins, David Ledo, Rohan Kadekodi, Badrish Chandramouli and Ken Hinckley. Escapement: A Tool for Interactive Prototyping with Video via Sensor-Mediated Abstraction of Time.",
      venue: "In Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI 2023)",
      year: 2023
    },
    {
      title: "Rohan Kadekodi, Saurabh Kadekodi, Soujanya Ponnapalli, Harshad Shirwadkar, Gregory R. Ganger, Aasheesh Kolli and Vijay Chidambaram. WineFS: a hugepage-aware file system for persistent memory that ages gracefully.",
      venue: "In Proceedings of the 28th ACM Symposium on Operating Systems Principles, 2021. (SOSP 2021)",
      year: 2021
    },
    {
      title: "Rohan Kadekodi, Se Kwon Lee, Sanidhya Kashyap, Taesoo Kim, Aasheesh Kolli and Vijay Chidambaram. SplitFS: Reducing Software Overhead in File Systems for Persistent Memory.",
      venue: "In Proceedings of the 27th ACM Symposium on Operating Systems Principles, pp. 494-508. ACM, 2019. (SOSP 2019)",
      year: 2019
    },
    {
      title: "Suhas Jayaram Subramanya, Devvrit, Harsha Simhadri, Ravishankar Krishanswamy, Rohan Kadekodi. RandNSG: Billion Point Nearest Neighbor Search on a Single Node.",
      venue: "Proceedings of the 33rd Annual Conference on Neural Information Processing Systems. (NeurIPS 2019)",
      year: 2019
    },
    {
      title: "Pandian Raju, Rohan Kadekodi, Vijay Chidambaram, Ittai Abraham. PebblesDB: Building Key-Value Stores using Fragmented Log-Structured Merge Trees.",
      venue: "Proceedings of the 15th Symposium of Operating Systems Principles, pp. 497-514. ACM, 2017. (SOSP 2017)",
      year: 2017
    },
    {
      title: "Jayashree Mohan, Rohan Kadekodi, Vijay Chidambaram. Analyzing IO Amplification in Linux File Systems (Poster).",
      venue: "Proceedings of the 8th ACM The Eighth SIGOPS AsiaPacific Workshop on Systems, Sep 2017. Best Poster Award. (ApSys 2017)",
      year: 2017
    }
  ],

  preprints: [
    {
      title: "K. Zhu, T. Tang, Q. Xu, Y. Gu, Z. Zeng, Rohan Kadekodi, L. Zhao, A. Li, et al. Tactic: Adaptive sparse attention with clustering and distribution fitting for long-context llms.",
      venue: "arXiv preprint arXiv:2502.12216, 2025",
      year: 2025
    },
    {
      title: "CY Lin, K Kamahori, Y Liu, X Shi, M Kashyap, Y Gu, R Shao, Z Ye, K Zhu, Rohan Kadekodi, et al. TeleRAG: Efficient retrieval-augmented generation inference with lookahead retrieval.",
      venue: "arXiv preprint arXiv:2502.20969, 2025",
      year: 2025
    },
    {
      title: "Y. Gu, Rohan Kadekodi, H. Nguyen, K. Kamahori, Y. Liu, B. Kasikci. ConsumerBench: Benchmarking Generative AI Applications on End-User Devices.",
      venue: "arXiv preprint arXiv:2506.17538, 2025",
      year: 2025
    }
  ],

  projects: [
    {
      title: "ScaleMem: Far Persistent Memory",
      organization: "University of Washington",
      status: "Ongoing",
      description: "Building a distributed Persistent Memory manager for transparent scaling of single-node memory-mapped applications across a cluster.",
      details: "Key contributions: Distributed memory management, transparent scaling architecture, cluster-wide memory mapping"
    },
    {
      title: "Tiered Memory Management with Controlled Allocation and Adaptive Migration",
      organization: "University of Washington", 
      status: "Ongoing",
      description: "Building a tiered memory system that uses smart allocation policies for achieving fine-grained hot data tracking, along with adaptive migrations for reacting to workload changes.",
      details: "Key contributions: Smart allocation policies, fine-grained data tracking, adaptive migration strategies"
    },
    {
      title: "Shared-state system for distributed interactive applications",
      organization: "Microsoft Research",
      venue: "CHI 2023",
      description: "Building a shared-state system with client-side caching and easy-to-use API for supporting distributed interactive applications in the cloud.",
      details: "Key contributions: Client-side caching, distributed state management, cloud application support"
    },
    {
      title: "WineFS: a hugepage-aware file system for persistent memory that ages gracefully",
      organization: "UT Austin",
      venue: "SOSP 2021", 
      description: "A PM file system aimed at preserving hugepages for improving the performance of emerging PM applications.",
      details: "Key contributions: Hugepage preservation, performance optimization for PM applications, graceful aging behavior"
    },
    {
      title: "Scaling Nearest Neighbor Search to a single-node secondary storage and distributed cluster",
      organization: "Microsoft Research",
      venue: "NeurIPS 2019",
      description: "Scaling Rand-NSG approximate Nearest Neighbor to out-of-core storage on a single node and a distributed cluster, while maintaining performance and availability.",
      details: "Key contributions: Out-of-core scaling, distributed clustering, performance optimization"
    },
    {
      title: "SplitFS: Reducing Software Overhead in File Systems for Persistent Memory", 
      organization: "UT Austin & VMware Research",
      venue: "SOSP 2019",
      description: "A user-space file system aimed at improving performance of POSIX applications on persistent memory by converting reads and writes to loads and stores from user space, and passing metadata operations to the kernel.",
      details: "Key contributions: User-space file system design, POSIX compatibility, metadata operation optimization"
    },
    {
      title: "PebblesDB: Building Key-Value Stores using Fragmented Log-Structured Merge Trees",
      organization: "UT Austin",
      venue: "SOSP 2017",
      description: "A key-value store based on fragmented log-structured merge trees, which reduces IO Amplification while increasing throughput.",
      details: "Key contributions: Fragmented LSM-tree design, IO amplification reduction, throughput optimization"
    }
  ],

  teaching: [
    {
      course: "CS360V: Virtualization",
      role: "Assistant Instructor",
      institution: "UT Austin",
      period: "Spring 2023"
    },
    {
      course: "CS380D: Distributed Computing", 
      role: "Teaching Assistant",
      institution: "UT Austin",
      period: "Spring 2022"
    },
    {
      course: "CS378: Virtualization",
      role: "Teaching Assistant", 
      institution: "UT Austin",
      period: "Fall 2019"
    }
  ],

  talks: [
    {
      title: "Profile Guided Memory Tiering (PRISM SRC Liaison Talk)",
      date: "May 2024"
    },
    {
      title: "Building high-performance storage systems for Persistent Memory (BigHPC Webinar)",
      date: "July 2022"
    },
    {
      title: "WineFS: A hugepage-aware file system for persistent memory that ages gracefully at Storage Analytics team (Google)",
      date: "October 2021"
    },
    {
      title: "WineFS: A hugepage-aware file system for persistent memory that ages gracefully at Symposium on Operating Systems Principles (SOSP 2021)",
      date: "October 2021"
    },
    {
      title: "SplitFS: Reducing Software Overhead in File Systems for Persistent Memory at Symposium on Operating Systems Principles (SOSP 2019)",
      date: "October 2019"
    },
    {
      title: "Accelerating POSIX applications on Persistent Memory at VMware Research",
      date: "August 2018"
    }
  ]
};
