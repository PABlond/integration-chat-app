from git import Repo


def push(repo_path):
    repo = Repo(repo_path)
    print(repo)
    files_to_update = repo.untracked_files +  [item.a_path for item in repo.index.diff(None)]
    print("To Update", files_to_update)
    for filename in files_to_update:
        print("commit {}".format(filename))
        repo.git.add(filename)
        repo.git.commit('-m', 'update {}'.format(filename),
                        author='PABlond <pierre-alexis.blond@live.fr>')
    # repo.git.push('origin', "develop")


if __name__ == '__main__':
    push(repo_path="")
