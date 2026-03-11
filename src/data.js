const portfolioData = {
  "projects": [
    {
      "id": 1,
      "project_title": "Code Chaos - Bolg Application",
      "project_description": "**Codechaos Blog** is a personal blogging application built with Django and styled with Tailwind CSS. This application allows only the creator (you) to post content, providing a private space for your thoughts, updates, and articles.\r\n\r\n## Features\r\n\r\n- **Personal Blog**: Only you can create and manage blog posts.\r\n- **Tailwind CSS**: Modern and responsive styling with Tailwind CSS.\r\n- **Django Admin**: Simple and powerful backend for managing posts.\r\n\r\n## Getting Started\r\n\r\nFollow these steps to get the project up and running on your local machine.\r\n\r\n### Prerequisites\r\n\r\n- Python 3.8+\r\n- Django 4.0+\r\n- Node.js (for Tailwind CSS)\r\n\r\n### Installation\r\n\r\n1. **Clone the Repository**\r\n\r\n   ```bash\r\n   git clone <repository-url>\r\n   cd codechaos-blog\r\n   ```\r\n\r\n2. **Set Up a Virtual Environment**\r\n\r\n   ```bash\r\n   python -m venv env\r\n   source env/bin/activate  # On Windows, use `env\\Scripts\\activate`\r\n   ```\r\n\r\n3. **Install Python Dependencies**\r\n\r\n   ```bash\r\n   pip install -r requirements.txt\r\n   ```\r\n\r\n4. **Install Node.js Dependencies**\r\n\r\n   ```bash\r\n   npm install\r\n   ```\r\n\r\n5. **Run Migrations**\r\n\r\n   ```bash\r\n   python manage.py migrate\r\n   ```\r\n\r\n6. **Collect Static Files**\r\n\r\n   ```bash\r\n   python manage.py collectstatic\r\n   ```\r\n\r\n7. **Run the Development Server**\r\n\r\n   ```bash\r\n   python manage.py runserver\r\n   ```\r\n\r\n8. **Access the Application**\r\n\r\n   Open your browser and go to `http://127.0.0.1:8000/`.\r\n\r\n## Project Structure\r\n\r\n- `blog_project/` - Main project folder\r\n  - `blog/` - Blog app folder\r\n  - `static/` - Static files (CSS, JS, images)\r\n  - `templates/` - HTML templates\r\n  - `manage.py` - Django management script\r\n  - `requirements.txt` - Python dependencies\r\n\r\n## Tailwind CSS Integration\r\n\r\n1. **Install Tailwind CSS**\r\n\r\n   Follow the [Tailwind CSS installation guide](https://tailwindcss.com/docs/guides/django) to integrate Tailwind CSS with Django.\r\n\r\n2. **Configure Tailwind CSS**\r\n\r\n   - Update `tailwind.config.js` to include your custom configurations.\r\n   - Add Tailwind CSS directives to your main CSS file.\r\n\r\n3. **Build Tailwind CSS**\r\n\r\n   ```bash\r\n   npm run build\r\n   ```\r\n\r\n## Usage\r\n\r\nAs the only user, you can manage your blog posts through Django's admin interface. Log in with the admin credentials and navigate to the blog posts section to create, edit, or delete posts.\r\n\r\n## Video\r\n\r\n[![Watch the video](https://img.youtube.com/vi/AMWuTu9Sdww/maxresdefault.jpg)](https://youtu.be/AMWuTu9Sdww)\r\n\r\n## License\r\n\r\nThis project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.\r\n\r\n## Contributing\r\n\r\nIf you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.\r\n\r\n## Acknowledgments\r\n\r\n- [Django](https://www.djangoproject.com/) - High-level Python web framework\r\n- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework\r\n\r\n---",
      "git_link": "https://github.com/Itz-Abhishek-Tiwari/Code-Chaos-Blog",
      "live_link": "https://github.com/Itz-Abhishek-Tiwari/Code-Chaos-Blog",
      "skills": [
        "python",
        "django",
        "git",
        "html5",
        "tailwindcss",
        "sqlite"
      ],
      "image": [
        {
          "id": 1,
          "name": "CodeChaos",
          "image": "/uploads/Screenshot_2024-10-01_at_18-43-15_Java_Script_Blog.png"
        },
        {
          "id": 2,
          "name": "CodeChaos",
          "image": "/uploads/Screenshot_2024-10-01_at_18-43-03_Blog_Posts.png"
        }
      ]
    },
    {
      "id": 2,
      "project_title": "My Custom Neovim Setup (NvChad)",
      "project_description": "This repository contains my customized Neovim configuration using [NvChad](https://github.com/NvChad/NvChad), tailored for web development with support for Python, Django, React, and Vue. It also includes powerful debugging capabilities for Python through `nvim-dap`.\r\n\r\n## Features\r\n\r\n- **NvChad Configuration**: A pre-configured Neovim setup that is modular and extensible.\r\n- **Language Support**:\r\n  - **Python**: Enhanced editing experience with LSP and autocompletion.\r\n  - **Django**: Django-specific enhancements for a smoother development workflow.\r\n  - **React**: Support for JSX syntax highlighting and code snippets.\r\n  - **Vue**: Syntax highlighting and autocompletion for Vue components.\r\n- **Debugging**: Integrated Python debugging with `nvim-dap`.\r\n\r\n## Installation\r\n\r\n1. **Install Neovim**: Ensure you have Neovim 0.7 or higher installed. Follow the [installation instructions here](https://github.com/neovim/neovim/wiki/Installing-Neovim).\r\n   \r\n2. **Clone the Repository**:\r\n   ```bash\r\n   git clone https://github.com/yourusername/nvchad-config.git ~/.config/nvim\r\n\r\n3. **Install Plugins**: Open Neovim and run:\r\n   ```vim\r\n   :PackerInstall\r\n   ```\r\n\r\n4. **Setup Python Debugger**:\r\n   Ensure you have the required dependencies installed. You can install `nvim-dap` and any necessary adapters for Python. Here\u2019s a quick setup guide:\r\n   ```bash\r\n   pip install debugpy\r\n   ```\r\n\r\n5. **Configuration**:\r\n   Customize the configuration files as needed. Check the `lua` directory for additional settings.\r\n\r\n## Usage\r\n\r\n- Launch Neovim and open your desired project.\r\n- Use the following commands for debugging:\r\n  - Start debugging: `:lua require'dap'.continue()`\r\n  - Set a breakpoint: `:lua require'dap'.toggle_breakpoint()`\r\n  - Step into: `:lua require'dap'.step_into()`\r\n  - Step out: `:lua require'dap'.step_out()`\r\n\r\n## Contributing\r\n\r\nFeel free to contribute by forking the repository and submitting pull requests. Any feedback or suggestions are welcome!\r\n\r\n## License\r\n\r\nThis project is licensed under the MIT License. See the LICENSE file for more information.\r\n\r\n## Acknowledgements\r\n\r\n- [NvChad](https://github.com/NvChad/NvChad)\r\n- [nvim-dap](https://github.com/mfussenegger/nvim-dap)",
      "git_link": "https://github.com/Itz-Abhishek-Tiwari/Neovim-Dotfiles",
      "live_link": "https://github.com/Itz-Abhishek-Tiwari/Neovim-Dotfiles",
      "skills": [
        "git",
        "linux"
      ],
      "image": [
        {
          "id": 3,
          "name": "nvchad",
          "image": "/uploads/240928_23h54m08s_screenshot_Uqvg8ZQ.png"
        },
        {
          "id": 4,
          "name": "nvchad",
          "image": "/uploads/241001_19h37m13s_screenshot.png"
        },
        {
          "id": 5,
          "name": "nvchad",
          "image": "/uploads/240928_23h54m08s_screenshot_Psd5Nz0.png"
        }
      ]
    },
    {
      "id": 3,
      "project_title": "NamiConfig",
      "project_description": "**NamiConfig** is my personalized configuration based on the [hyprdots](https://github.com/prasanthrangan/hyprdots) setup for **Hyprland**. This configuration is tailored for a polished and efficient Linux desktop experience, unified by the **Kanagawa** colorscheme for a cohesive aesthetic across all applications.\r\n\r\n## Features\r\n\r\n### Window Manager\r\n- **Hyprland**: Configured for a smooth and lightweight Wayland experience with performance optimizations and a visual theme inspired by the **Kanagawa** colors.\r\n\r\n### UI and Theming\r\n- **Kvantum**: Custom Qt theme with **Kanagawa** colors for a unified look.\r\n- **Waybar**: A customizable status bar reflecting the **Kanagawa** colorscheme, displaying system stats and workspaces.\r\n- **Rofi**: Application launcher with a **Kanagawa**-inspired theme for easy navigation.\r\n\r\n### Terminal\r\n- **Kitty**: Highly customizable and fast terminal, configured with the **Kanagawa** palette.\r\n- **Lazygit**: A terminal UI for Git, tailored to the **Kanagawa** colors for an aesthetically pleasing experience.\r\n\r\n### System Monitoring\r\n- **Btop**: Resource monitor themed with the **Kanagawa** colorscheme for tracking CPU, memory, and processes.\r\n- **Cava**: Audio visualizer with **Kanagawa** colors for a synchronized visual experience while listening to music.\r\n\r\n### Development Environment\r\n- **Neovim**: Fully customized with the **Kanagawa** colorscheme, supporting Python, JavaScript, and more, with nvim-dap for debugging.\r\n- **Ranger**: Terminal-based file manager styled with the **Kanagawa** color palette for efficient navigation.\r\n\r\n### Additional Tools\r\n- **Fastfetch**: Displays system information on terminal launch, customized to use the **Kanagawa** theme.\r\n- **Silicon**: Generates beautiful code snippets, using the **Kanagawa** color palette.\r\n- **Spicetify**: A theme for Spotify's desktop client to reflect the **Kanagawa** aesthetic.\r\n- **Swaync**: Wayland notification daemon, customized for productivity with the **Kanagawa** colors.\r\n- **Zathura**: Lightweight PDF reader, configured with Vim-like keybindings and the **Kanagawa** theme.\r\n\r\n## Installation\r\n\r\nTo use **NamiConfig**, follow these steps:\r\n\r\n1. Clone the repository:\r\n    ```bash\r\n    git clone https://github.com/[your-username]/NamiConfig.git\r\n    ```\r\n\r\n2. Run the installation script:\r\n    ```bash\r\n    cd NamiConfig\r\n    ./install.sh\r\n    ```\r\n\r\n3. Additional instructions for configuring specific tools (if required) can be found in the relevant config folders.\r\n\r\n## Custom Configurations\r\n\r\n- **Kanagawa Colorscheme**: All apps and tools use the **Kanagawa** colors for a consistent visual experience.\r\n- **Kvantum**: Provides a unified visual experience for both GTK and Qt applications with the **Kanagawa** theme.\r\n- **Hyprland**: Tweaks for optimal performance and smooth tiling behavior, all within the **Kanagawa** color palette.\r\n- **Waybar**: Includes modules like CPU, memory, and workspace indicators, themed to match the **Kanagawa** aesthetic.\r\n- **Rofi**: Customized with the **Kanagawa** palette for an integrated look and feel.\r\n- **Spicetify**: Customizes Spotify\u2019s desktop client to fit into the overall **Kanagawa** theme.\r\n\r\n## Contributions\r\n\r\nContributions are welcome! Feel free to submit issues or pull requests to improve **NamiConfig**.",
      "git_link": "https://github.com/Itz-Abhishek-Tiwari/Hyprland-hyde-dots",
      "live_link": "https://github.com/Itz-Abhishek-Tiwari/Hyprland-hyde-dots",
      "skills": [
        "git",
        "linux"
      ],
      "image": [
        {
          "id": 7,
          "name": "NamiConfig",
          "image": "/uploads/241001_20h40m19s_screenshot.png"
        },
        {
          "id": 8,
          "name": "NamiConfig",
          "image": "/uploads/241001_20h39m49s_screenshot.png"
        },
        {
          "id": 9,
          "name": "NamiConfig",
          "image": "/uploads/241001_20h41m09s_screenshot.png"
        }
      ]
    }
  ],
  "work": [
    {
      "id": 1,
      "company": "Salesqueen Software Solutions",
      "description": "Resolved a critical bug in an HR management dashboard, correcting issues with inaccurate graph rendering using ReactJS. Developed and implemented sub-tabs for employee login/logout records and upcoming leave dates with HTML and Bootstrap. Enhanced dashboard functionality by integrating additional features for improved HR management, leveraging ReactJS and Bootstrap for a responsive design.",
      "link": "https://salesqueen.org/"
    }
  ],
  "education": [
    {
      "id": 1,
      "institution": "Shivajirao Kadam Institute Of Technology And Management, Indore",
      "start_date": "2020-06-01",
      "end_date": "2024-06-01",
      "degree": "B.Tech Computer Science",
      "cgpa": 8.07
    },
    {
      "id": 2,
      "institution": "Aradhana higher secondary school, Neemuch",
      "start_date": "2019-04-01",
      "end_date": "2020-04-01",
      "degree": "Grade - XII",
      "cgpa": 6.5
    },
    {
      "id": 3,
      "institution": "Alpha higher secondary school, Neemuch",
      "start_date": "2016-04-01",
      "end_date": "2017-04-01",
      "degree": "Grade - X",
      "cgpa": 6.5
    }
  ],
  "review": [],
  "articles": [
    {
      "id": 1,
      "title": "Introducing NamiConfig: My Custom Hyprdots Configuration",
      "body": "In the realm of Linux desktop customization, few things offer the same sense of control and personalization as window managers and dotfiles. After months of experimenting with various configurations, I\u2019m excited to introduce *NamiConfig*, my own take on a highly customized setup based on Hyprdots. This config merges style, performance, and productivity in one cohesive package, leveraging the power of the Hyprland window manager and a slew of other tools that make the Linux experience both beautiful and functional.\r\n\r\n## Why NamiConfig?\r\n\r\nAt its core, NamiConfig is a refined version of the excellent [Hyprdots configuration by Prasanth Rangan](https://github.com/prasanthrangan/hyprdots), which I\u2019ve adapted to my personal workflow. The vision behind this configuration was to create a polished, lightweight environment that strikes a perfect balance between aesthetics and efficiency. I wanted it to look stunning while being fast and highly responsive, ideal for developers, designers, or anyone who thrives on a minimal yet powerful desktop environment.\r\n\r\n### Core Tools in NamiConfig\r\n\r\n1. **Hyprland** \u2013 As the centerpiece, Hyprland offers a dynamic way to manage windows and workspaces. It\u2019s a wayland-based compositor that is both modern and lightweight, with a focus on flexibility and speed.\r\n   \r\n2. **Kvantum** \u2013 For those who crave a consistent and customizable Qt theme, Kvantum is an absolute must. I\u2019ve integrated it deeply into NamiConfig, ensuring that all Qt-based applications follow the overall design theme.\r\n\r\n3. **Kitty** \u2013 My terminal of choice. Fast, feature-packed, and aesthetically pleasing, Kitty pairs perfectly with the rest of the setup, offering GPU acceleration and smooth font rendering.\r\n\r\n4. **Fastfetch** \u2013 A lightweight tool for displaying system information on startup. It gives that quick snapshot of the system\u2019s status with a minimal impact on performance.\r\n\r\n5. **Waybar** \u2013 The customizable status bar I\u2019m using in NamiConfig. It's configured to display all the necessary information\u2014workspaces, system stats, date and time\u2014while blending perfectly into the desktop\u2019s aesthetic.\r\n\r\n6. **Rofi** \u2013 A powerful launcher, Rofi is used in NamiConfig for application launching, window switching, and more. It\u2019s simple but incredibly versatile when configured properly.\r\n\r\n7. **Btop** \u2013 For resource monitoring, I\u2019ve opted for Btop due to its visually appealing interface and detailed system information. It\u2019s great for quickly checking CPU, RAM, and network usage without feeling clunky.\r\n\r\n8. **LazyGit** \u2013 A terminal-based Git client, LazyGit makes it easy to manage repositories, making it a crucial part of my workflow as a developer.\r\n\r\n9. **Spicetify** \u2013 NamiConfig even extends to music. Using Spicetify, I\u2019ve customized Spotify\u2019s interface to match the Kanagawa color scheme, ensuring that everything remains cohesive, even during a coding session with background music.\r\n\r\n10. **Neovim (NvChad)** \u2013 NamiConfig includes extensive customizations for Neovim (NvChad), primarily for Python and web development, including Django and React workflows. With `nvim-dap` for debugging, it\u2019s an all-in-one powerhouse for coding.\r\n\r\n### Aesthetic: The Kanagawa Colorscheme\r\n\r\nA significant part of NamiConfig\u2019s appeal comes from the Kanagawa colorscheme, which I\u2019ve applied across the entire setup. Inspired by traditional Japanese art, this color palette brings warmth and harmony to the desktop. It\u2019s soft on the eyes while providing excellent contrast, perfect for long coding or writing sessions. I\u2019ve made sure that every app, from the terminal to Spotify, stays in sync with this theme, creating a truly unified look.\r\n\r\n### Key Features and Customizations\r\n\r\n- **Performance Optimizations**: NamiConfig is designed to be lightweight, with optimizations for speed. Hyprland\u2019s compositing is highly responsive, and paired with tools like Kitty and Fastfetch, the overall experience remains snappy even under heavy workloads.\r\n\r\n- **Modular Configuration**: NamiConfig is modular, making it easy to modify or extend. Whether you want to change the window management behavior, tweak the bar, or add new functionality, each component can be adapted to suit your needs.\r\n\r\n- **Developer-Centric**: The configuration has been tailored with developers in mind, especially those working in Python, Django, and JavaScript (React). With integrated support for `nvim-dap` and enhanced Git management through LazyGit, it's a powerful environment for programming.\r\n\r\n- **Music and Media Integration**: With Spicetify and Rofi, managing music and media becomes seamless. Whether you\u2019re switching between coding and relaxing or multitasking between projects, it feels effortless.\r\n\r\n### The Future of NamiConfig\r\n\r\nNamiConfig is always evolving. I\u2019m constantly learning and refining it to incorporate new tools, better performance enhancements, and, of course, a deeper level of personalization. The ultimate goal is to share it publicly, so that others in the Linux and developer community can benefit from a configuration that emphasizes both beauty and function.\r\n\r\nFor now, it\u2019s become my daily driver\u2014a workspace that not only looks good but also supercharges productivity. With plans to keep improving it as I explore more tools and configurations, NamiConfig will continue to grow into a more versatile environment.\r\n\r\n---\r\n\r\n*NamiConfig* isn\u2019t just a dotfile setup. It\u2019s a philosophy of blending design and efficiency into an everyday workspace. Whether you\u2019re a coder, writer, or simply someone who enjoys a beautiful desktop, NamiConfig can be adapted to fit your needs. Stay tuned for updates, and feel free to reach out if you\u2019re interested in trying it out!",
      "created_at": "2024-10-02 06:19:02",
      "link": "https://github.com/Itz-Abhishek-Tiwari/NamiConfig",
      "image": [
        {
          "id": 7,
          "name": "NamiConfig",
          "image": "/uploads/241001_20h40m19s_screenshot.png"
        },
        {
          "id": 8,
          "name": "NamiConfig",
          "image": "/uploads/241001_20h39m49s_screenshot.png"
        },
        {
          "id": 9,
          "name": "NamiConfig",
          "image": "/uploads/241001_20h41m09s_screenshot.png"
        }
      ]
    },
    {
      "id": 2,
      "title": "Introducing My Custom NvChad Setup: A Powerhouse for Development",
      "body": "As a developer, having a streamlined and efficient editor is crucial. After exploring various configurations and text editors, I settled on Neovim with the **NvChad** framework, customized to fit my workflow. In this article, I\u2019ll take you through my personalized NvChad setup, optimized for Python, JavaScript, and web development, including tools like Django and React. With this configuration, the aim is to create an environment that enhances productivity while remaining lightweight and aesthetically pleasing.\r\n\r\n## Why NvChad?\r\n\r\n[NvChad](https://nvchad.com/) is a community-driven Neovim configuration built to combine the power and flexibility of Vim with modern plugin management and customization. The reason I chose NvChad over alternatives like SpaceVim or Doom Emacs lies in its simplicity and modularity. NvChad provides a rock-solid base, and its structure allows me to tweak every part of the setup to match my needs.\r\n\r\n### Core Features of My NvChad Setup\r\n\r\n1. **Enhanced Python Development** \u2013 My primary development language is Python, so I\u2019ve tailored NvChad to work seamlessly with Django and Python projects. This includes powerful linting, formatting, autocompletion, and debugging tools.\r\n\r\n2. **React and JavaScript Support** \u2013 For web development, especially with React, this setup comes with tools to make JavaScript and JSX development a breeze. I\u2019ve ensured that IntelliSense-like autocompletion, ESLint integration, and snippets are available to boost productivity.\r\n\r\n3. **Django-Specific Tools** \u2013 As a Django developer, I rely on tools that integrate with the framework, like syntax highlighting for Django templates, model navigation, and fast access to database management tools.\r\n\r\n4. **nvim-dap (Debug Adapter Protocol)** \u2013 One of the standout features of my configuration is the integration of `nvim-dap` for debugging. With support for Python and JavaScript, I can set breakpoints, step through code, and inspect variables\u2014all within Neovim.\r\n\r\n5. **LSP (Language Server Protocol)** \u2013 Using Neovim\u2019s native LSP capabilities, I\u2019ve set up language servers for Python, JavaScript, HTML, and CSS. This gives me IDE-like features such as code navigation (go-to definition, find references), real-time linting, and auto-suggestions while coding.\r\n\r\n6. **Git Integration with LazyGit** \u2013 Managing Git within Neovim is a breeze thanks to LazyGit, which is fully integrated into my setup. It allows for rapid staging, committing, and branching without leaving the editor, keeping me focused on development.\r\n\r\n### Aesthetic and Usability: Kanagawa Colorscheme\r\n\r\nAs with my other configurations (like NamiConfig), the **Kanagawa colorscheme** is a key element here as well. Inspired by the beauty of Japanese art, the Kanagawa theme gives the editor a calm, refined look. I\u2019ve applied this theme across all aspects of my Neovim setup, from the editor UI to the terminal, ensuring consistency and visual appeal during long coding sessions.\r\n\r\n### Key Plugins in My Setup\r\n\r\n1. **Telescope** \u2013 This fuzzy finder allows me to quickly search through files, buffers, and even text within files. It\u2019s one of the core components for fast navigation in large projects, and I\u2019ve heavily customized it to fit my workflow.\r\n\r\n2. **Nvim-Tree** \u2013 For file exploration, Nvim-Tree provides a smooth, minimalist file browser that integrates well with the editor. It's customized to open and close as needed, keeping the workspace clutter-free.\r\n\r\n3. **Treesitter** \u2013 Syntax highlighting and code understanding are significantly improved with Treesitter. It provides accurate and fast syntax highlighting, making it easier to work with complex codebases, especially when switching between multiple languages.\r\n\r\n4. **Lualine** \u2013 A minimal yet informative status line, Lualine is configured to show essential details like the current mode, file type, branch, and diagnostics. It integrates perfectly with the Kanagawa theme, providing a seamless look.\r\n\r\n5. **AutoPairs & Surround** \u2013 These plugins help automate common editing tasks like pairing brackets, quotes, and parentheses, while also making it easy to manipulate text objects like quotes or tags.\r\n\r\n6. **Mason** \u2013 Mason handles the installation of LSP servers, DAP (debugging), and formatting tools. This ensures that my setup stays up-to-date with the latest language tooling with minimal configuration effort.\r\n\r\n### Productivity-Boosting Features\r\n\r\n- **Code Formatting**: With built-in formatter support for Python (via `black` and `isort`) and JavaScript (via `prettier`), my NvChad setup ensures that all code follows best practices and remains consistent across projects.\r\n  \r\n- **Snippet Support**: I\u2019ve integrated custom snippets for Python, Django, and React development to speed up repetitive coding tasks. For example, Django model and form scaffolding can be generated with just a few keystrokes.\r\n\r\n- **Session Management**: With session plugins enabled, I can save and restore project sessions, ensuring that I can return to the exact state I left a project, including open files, windows, and cursor positions.\r\n\r\n- **Task Automation**: Using plugins like `vim-dispatch` and custom terminal integration, I can run Django management commands or NPM tasks directly from within Neovim, saving time and minimizing context switching.\r\n\r\n### Debugging with `nvim-dap`\r\n\r\nOne of the features I rely on heavily is the built-in debugging support through `nvim-dap`. This makes Neovim not just a text editor but a full-fledged development environment. Setting breakpoints, stepping through code, and inspecting variables all happen without leaving the editor, which enhances focus and productivity. With custom keybindings, I can control the debugging flow smoothly and intuitively.\r\n\r\n### Custom Keybindings\r\n\r\nTo make my workflow faster, I\u2019ve added a series of custom keybindings:\r\n- **File Navigation**: I\u2019ve streamlined navigation between files and buffers using simple key mappings for Telescope, allowing me to find files or symbols in seconds.\r\n- **Code Navigation**: Mappings for LSP commands like go-to-definition, hover for documentation, and find-references are all integrated for fast access to the most-used features.\r\n- **Window Management**: I\u2019ve also simplified window resizing, splitting, and moving to maximize efficiency while working in multi-file layouts.\r\n\r\n### The Future of My NvChad Setup\r\n\r\nMy custom NvChad configuration is always evolving as I explore new plugins and refine my workflow. While it\u2019s currently optimized for Python and JavaScript development, I\u2019m planning to expand support for other languages, improve the debugging experience, and further enhance the usability of the editor.\r\n\r\nFor now, it serves as my primary development environment, combining speed, simplicity, and the power of modern Neovim. Whether you\u2019re a web developer, backend engineer, or someone who just loves a highly configurable text editor, my NvChad setup can be tailored to your specific needs.\r\n\r\n---\r\n\r\n*NvChad* has become the cornerstone of my development workflow. It\u2019s more than just a text editor\u2014it's a complete environment that helps me write, debug, and maintain code with efficiency and precision. If you're interested in trying out this setup or want to customize it further for your own projects, feel free to reach out or follow along with updates as I continue to evolve it.",
      "created_at": "2024-10-02 09:58:28",
      "link": null,
      "image": [
        {
          "id": 3,
          "name": "nvchad",
          "image": "/uploads/240928_23h54m08s_screenshot_Uqvg8ZQ.png"
        },
        {
          "id": 4,
          "name": "nvchad",
          "image": "/uploads/241001_19h37m13s_screenshot.png"
        },
        {
          "id": 5,
          "name": "nvchad",
          "image": "/uploads/240928_23h54m08s_screenshot_Psd5Nz0.png"
        }
      ]
    }
  ]
};

export default portfolioData;
