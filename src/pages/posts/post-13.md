---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Shell and Git Fun"
pubDate: 2025-11-12T19:34:05-04:00
description: 'Migrating shell and git notes'
tags: ["programming"]
postSlug: 'post-13'
---



## Intro

Default to shortcuts and be patient with the documentation. 

&nbsp;



## Shell

### Terminology

Directory: file that contains pointers (inodes) to other files.


&nbsp;

Variables
```bash
#${} is useful for adding more characters
name="Joe"; echo ${name} ; echo $name ; echo ${name}_rocks. 
```

Double quotes("") preserve the content as stored in the variable. Otherwise, it's processed by the shell.


&nbsp;

Arrays:
```bash
# In zsh, arrays are 1-indexed
# No commas
words=("Joe" "needs" "to" "breathe")
echo ${words[1]} # Joe
echo ${words[@]} # Joe needs to breathe
echo ${#words[@]} # 4
```
&nbsp;

Conditionals and conditional expressions
```bash
# Watch your spaces a
# Double brackets support more operations
# Brackets variations: [[ exp ]], [exp]
# Expressions: -d -a ( exp ), -eq, -ne.
if [ 10 -eq 10 ]; then
    echo "makes sense"
else
    echo "no"
fi
```

Refer to <a class="secondary-a" href="https://unix.stackexchange.com/questions/306111/what-is-the-difference-between-the-bash-operators-vs-vs-vs"> bracket differences </a>
and  <a class="secondary-a" href="https://www.gnu.org/software/bash/manual/html_node/Bash-Conditional-Expressions.html"> conditional expressions </a>
&nbsp;

&nbsp;

Loops
```bash
# while
i=0
count=0
while [[ $i -lt 10 ]]; do
    # (()) is for arithmetic expressions
    (( count++ ))
    (( i++ ))
done
echo "Count: ${count}"

# for
items=("Take" "it" "easy")
for item in $items; do
    echo $item
done
```

Refer to <a class="secondary-a" href="https://www.gnu.org/software/bash/manual/html_node/Looping-Constructs.html"> loops </a>

&nbsp;





&nbsp;


### Commands



<u>man</u>

```bash
man command
```

&nbsp;

<u>du</u>

Let's man du<sup><a href="#footnotes" class="secondary-a"> 1.</a> </sup> and decypher the synopsis: 

<span class="bold-rounded">
du [-Aclnx] [-H | -L | -P] [-g | -h | -k | -m] [-a | -s | -d <u>depth</u>] 
</span>

&nbsp;


1. You can choose to stick the flags together if they're inside brackets. All of these  are valid:
- du -h -d -k
- du -h -d - k
- du -hd -k

2. Flags with arguments will have underlines next to them. For du, look at depth.

- du -hd1
- du -hd 1 

&nbsp;

<u>find</u>

The find command took time to understand. I had to understand what primaries exactly meant, but it turns out they're  expressions specific to the  <u> find </u> command.  An expression is a combination (primaries in this example) of expressions and operators that evaluate to true or false.

&nbsp;



<span class="bold-rounded">
find [-H | -L | -P] [-EXdsx] [-f <u>path</u>] <u>path</u> <u>...</u> [expression]
</span>


&nbsp;
1. ...  means you can repeat the previous argument
2. \[expression]:  something like -type f


&nbsp;

<u>sh</u>

Allows to run a mini-shell script to run more complex commands. It's useful to create git aliases or embellish certain commands.

&nbsp;


<span class="bold-rounded">sh -c [-abCefhimnuvx] [-o option]... [+abCefhimnuvx] [+o option]...
           command_string </span>
&nbsp;




&nbsp;



What do these commands do? 
```bash
# You can also write it like: du -h -d -1 
du -hd1 | sort -n
```

<details>
<summary >Show Answer</summary>
 
 Sort the file sizes at depth 1 (immediate subdirectories). | is passing the input from one command to the other.

</details>

&nbsp;


```bash
# -type, -name -exec are all primaries
find . -type d -name '202*' -exec rm -r {} \;
```
<details>
<summary >Show Answer</summary>
 
 Find all the directories  with 202* and remove them.

 1. -exec utility [argument ...] ;
 2. You need the \, otherwise shell will treat it the semicolon as the start of a different command
 

</details>
&nbsp;




```bash
find . -type f \( -name "*.aif" -o -name "*.wav" \) -exec mv {} . \;
```

<details>
<summary >Show Answer</summary>
 
 Move .aif and .wav files to the current directory
1. "If the string “{}” appears anywhere in the utility name or the arguments it is replaced by the pathname of the current file." This just means {} is the result of what you found.

</details>

&nbsp;

```bash
find . -type d -exec sh -c 'echo "Found {}"' \;
```

<details>
<summary >Show Answer</summary>
 
Find all the directories and echo their result.

</details>


&nbsp;

```bash
mv *svg* SVG/
```
<details>
<summary >Show Answer</summary>
 
 Move any file containing svg to the SVG/ folder

</details>
&nbsp;

### Applications


Aliases saves some time to open and boot up projects. These are some of mine:

```bash
alias py=/usr/bin/python3
alias refresh='source ~/.zshrc'
alias editshell='vi ~/.zshrc'
alias editgit='vi ~/.gitconfig'
alias nrb='npm run backend'
alias nrd='npm run dev'
alias guitar='cd /Users/kanleafsnail/Desktop/Through/Projects/Python\ Projects/tkinter_music_theory && source .venv/bin/activate && python3 -m package.gui.guitar_gui'
alias diarydb='cd /Users/kanleafsnail/Desktop/Through/Projects/React\ Projects/Diary/diary/backend/instance && sqlite3 diary    .db'
alias ios='open /Users/kanleafsnail/Desktop/Through/Projects/iOS\ Projects/'
alias joe='cd /Users/joesnail/Through/Projects/joefarah/joe-farah && nrd'

```
&nbsp;

The terminal is my motivational speaker.
```bash
quotes=(
  "Be more patient when you're looking at documentation, it will save hours."
  "Every line is susceptible to ERROR."
  "How do I even start to think about this?"
  "The hidden secrets of the problem: What can I use?"
  "Do I really know what this function is doing?"
  "What's the initial configuration of my problem?"
  "Do I need more variables, do I need less variables?"
  "Is my order correct?"
  "Are you going too fast?"
  "Is it a logical error, a language error?"
  "Say the English before you say the code"
  "Relax through the edge cases"
  "Sometimes, your initial approach is just plain wrong. Nothing wrong with that. It's just learning."
)

# @: special parameter to access all elements
for q in ${quotes[@]}; do
    echo ${q}
done

# RANDOM's range is 0 - 32767, 
# zsh arrays are 1-indexed: add + 1. 
echo ${quotes[RANDOM % ${#quotes[@]} + 1]}
```




&nbsp;


Counting items in subdirectories
```bash
count_items_in_directory() {
  # Prompt user for directory path
  # zsh style read
  read "dir_path?Enter the directory path: "

  # Check if the directory exists
  if [ -d "$dir_path" ]; then
    # List directories under the specified directory with item counts
    find "$dir_path" -mindepth 1 -maxdepth 1 -type d -exec sh -c 'echo "{}: " && find "{}" -mindepth 1 | wc -l' \;
  else
    echo "Directory '$dir_path' does not exist."
  fi
}

```
- wc -l: number of lines of your result.
- With -mindepth 1 and -maxdepth 1, you don't count the dir itself.

&nbsp;

Modulo practice
```bash
practice_mod() {
  while true; do
    # RANDOM % N: [0, n-1]
    a=$(( RANDOM % 41 - 20 ))
    b=$(( RANDOM % 21 - 10 ))
    [[ $b -eq 0 ]] && b=1

    read "answer?What is ${a} mod ${b}? "
    [[ ${answer} == "exit" ]] && break

    result=$(( a % b ))
    [[ ${answer} -eq ${result} ]] && echo "Correct!" || echo "Wrong: ${result}"
  done
}
```




&nbsp;

Creating an .env file with the test command. Use the backslash.

```bash
# package.json from Gameok 
# Note: echo \"    \" and  \\n
"create-env": "cd backend && test -f .env || echo  \"SECRET_KEY= #fill\\nADMIN=#fill\\nEMAIL=#fill\\nPASSWORD= #fill\\nDATABASE_URL=sqlite:///gamelibrary.db\\nDATABASE_TRACKING=False\\nFLASK_APP=gameok.py\\nFLASK_ENV=development\\nFLASK_DEBUG=1\" > .env"
```

&nbsp;

## Git

  
### Terminology

- Fetch: get the changes from the remote but don't do anything yet.
- Pull: Fetch and merge.
- Fork: Make a repo on your GitHub Account.
- Clone: Make a copy on your machine.
- Pull Request: Asks the original repo owner to merge your branch into theirs.


&nbsp;

### Commands 


Help

```bash
git command --help

```
&nbsp;

Navigation 
```bash
^(#): parent        # merge commits
~: n commits behind # simply go behind
^..:                # range
c1^..cn             # c1 excluded, cn included.
^2~3                # 2nd parent, go 3 commits behind
```

&nbsp;

Branch Management
```bash
git branch -m old new        # Rename branch
git branch -d branch-name    # Checkout the branch first
git checkout -b new-branch   # Create a new branch and move to it
git branch -f main HEAD~3    # Moving a branch pointer

```

&nbsp;

Reset

```bash
git reset --soft HEAD~  # undo commit but keep changes staged
git reset --mixed HEAD~ # undo commit and unstage
git reset --hard HEAD~  # working directory changes to the latest commit
```
&nbsp;

Animations: <a href="https://jumpshare.com/share/nRTfmoSBAeM4xBReUVjg?b=ATDZ9pBQP6EwdXywf8xg" class="secondary-a"> Reset </a>

&nbsp;

Merge 



```bash
# You're on the branch you want feature to be merged with.
git merge feature

```
&nbsp;


Animations: 
<a href="https://jumpshare.com/share/2nXVZns9NTI7VET2kD1l?b=ATDZ9pBQP6EwdXywf8xg" class="secondary-a"> Merge</a>,
<a href="https://jumpshare.com/share/0o3am6gIqDWSHxgo9NP0?b=ATDZ9pBQP6EwdXywf8xg" class="secondary-a"> Conflict</a>,
<a href="https://jumpshare.com/share/6rYBmldObHwZiypk9eUD?b=ATDZ9pBQP6EwdXywf8xg" class="secondary-a"> Pull </a>

&nbsp;

Rebase

The first argument is always what you're rebasing to.
```bash
# implicit: If I am on branch X
git rebase main
# explicit: I could be anywhere
git rebase main A
```

&nbsp;

Cherry-pick

Plop down a commit from anywhere in the tree onto HEAD (as long as that commit isn't an ancestor of HEAD).



```bash
# Simplest pattern
git cherry-pick commit
``` 

&nbsp;


Reflog 
```bash 
# Shows where all your head were pointing in the past.
git reflog

# HEAD@{#} <-- number of moves ago
# 144d2b2 HEAD@{1}: commit: Add post 12
# 9fdfd49 HEAD@{2}: commit: Add post 11
```

&nbsp;

Show 
```bash
# git show [<options>] [<object>…​]
# --pretty and --name-only are options
# <object> here is omitted: the current commit
git show --pretty="" --name-only   # no headers shown
```
&nbsp;


Diff 
```bash
git diff --pretty="" --name-only 370c264 144d2b2
```


&nbsp;

Remote

```bash
git remote add origin url   # Add remote
git remote -v               # Show remote

```



&nbsp;

Revert: creates a new commit that reverse the changes of that commit
```bash
git revert commit
```

&nbsp;


### Aliases

Creating custom aliases for git.
```bash
# shell alias
alias editgit='vi ~/.gitconfig'

# Applies to my system account (whoami)
git config --global --get-regexp alias

# You can have specific configuration for certain projects.
.git/config
```


&nbsp;

```bash
# git + alias
# !: treats it as a shell command
[alias]
    st= status
    #cm:  see net block
    cm-no-edit= !git add . && git commit --amend --no-edit
    ptr= push origin main
    f-ptr= push --force origin main
    tree= log --all --graph --decorate --oneline
```


&nbsp;

Fast way to commit
&nbsp;

```bash
# Without zsh: you do: read -p 
cm= !zsh -c 'read \"msg?Enter a commit message: \" && git add . && git commit -m ${msg}'
```


&nbsp;


### Applications

Rebasing and squashing
```bash
git rebase -i HEAD~# # of commits
# interactive menu: squash
git rebase --continue
```
&nbsp;


Squash all commits 
```bash
# rev-list gives you the commits reachable from where you specify
# $() for shell command
# commit with 0 parent: first one.
git reset --soft $(git rev-list --max-parents=0 HEAD)
git commit -m "What did you do!"
```

&nbsp;


View repository size
```bash
# v: verbose  H: human-readable
git count-objects -vH
```



&nbsp;


Removing large files from a git history with <a class="secondary-a"  href="https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html"> git-filter-repo </a>
```bash
git filter-repo --path large-file.zip --invert-paths --all
# Accidentally commited large videos 
git filter-repo --path videos.mp4 --invert-paths
```

&nbsp;

Untrack a specific file
```bash
git ls-files
git rm --cached filename
```

&nbsp;


<div class=" text-center relative mx-auto"> <b class="bold-rounded p-2">Don't hesitate to experiment with a random repo.</b> </div>





&nbsp;

## Shortcuts


Shell
<div class="shortcuts-box">

<div data-info="^ U" class="shortcut-card">  Clear line </div>
<div data-info="^ L" class="shortcut-card"> Clear terminal </div>
<div data-info="^ C" class="shortcut-card"> Cancel command </div>
<div data-info="^ A" class="shortcut-card"> Move to beginning </div>
<div data-info="^ E" class="shortcut-card"> Move to end </div>
<div data-info="^ K"class="shortcut-card"> Del  after cursor </div>
<div data-info="^ W" class="shortcut-card"> Del word </div>
<div data-info="^ K" class="shortcut-card"> Del  before cursor </div>
<div data-info="⌥ <>" class="shortcut-card"> Word navigation </div>
<div data-info="^ -" class="shortcut-card"> Undo </div>


</div>

&nbsp;

Vim
<div class="shortcuts-box">
<div data-info="u" class="shortcut-card">Undo</div>
<div data-info="^ r" class="shortcut-card">Redo</div>
<div data-info="dd" class="shortcut-card">Delete Line</div>
<div data-info="Ndd" class="shortcut-card">Delete N lines</div>
<div data-info="yy" class="shortcut-card">Yank Line</div>
<div data-info="p" class="shortcut-card">Paste</div>
<div data-info="$" class="shortcut-card">End of Line</div>
<div data-info="0" class="shortcut-card">Start of Line</div>
<div data-info="w" class="shortcut-card">Next Word</div>
<div data-info="b" class="shortcut-card">Previous Word</div>
<div data-info="gg" class="shortcut-card">Top of File</div>
<div data-info="G" class="shortcut-card">Bottom of File</div>
</div>

&nbsp;

Mac
<div class="shortcuts-box">
<div data-info="^ <>" class="shortcut-card"> Change desktops </div>
<div  data-info="^ fn <>" class="shortcut-card"> Move and resize </div>
</div>

&nbsp;



&nbsp;


## Resources

Git
- <a class="secondary-a" href="https://learngitbranching.js.org/"> Git Branching </a>
- <a href="https://git-scm.com/learn" class="secondary-a"> Progit </a>


&nbsp;

## Footnotes

1. Another <a class="secondary-a" href="https://en.wikipedia.org/wiki/Mandu_(food)"> man du </a>

<style>

    .shortcuts-box {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        
    }

    .shortcut-card {
        position: relative;
        display: block;
        width: 10rem;
        margin: 2px;
        padding: 0.8rem;
        border-radius: 0.2rem;
        background: #927e926a;
        text-align: center;
        overflow: hidden;
    }

    .shortcut-card:before {
        content: attr(data-info);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font-size: 1.5rem;
        height: 100%;
        background-color: #33905bff;
        align-items: center;
        justify-content: center;
        display: flex;
        opacity: 0;
        transform: scale(5);
        transition: all 0.3s;
        
    }

    .shortcut-card:hover:before {
      transform: scale(1);
      opacity: 1;

    }


    @media screen and (min-width: 636px) {
      .shortcuts-box {
      
           grid-template-columns: repeat(4, 1fr);


      }



    }



</style>