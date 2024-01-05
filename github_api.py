import requests

def get_github_user(username):
  api_url = f"https://api.github.com/users{username}"
  response = requests.get(api_url)

  if response.status_code == 200:
    user_data = response.json()
    return user_data
  else:
    print(f"Failed to fetch user data. Status code: {response.status_code}")
    return None

def main():
  github_username = input("Enter a Github username: ")
  user_data = get_github_user(github_username)

if user_data:
  print(f"Github User Information for {github_username}:")
  print(f"Name: {user_data['name']}")
  print(f"Bio: {user_data['bio']}")
  print(f"Public Repositories: {user_data['public_repos']}")
  print(f"Followers: {user_data['followers']}")
  print(f"Following: {user_data['following']}")
else
  print("Exiting...")

if __name__ == "__main__":
  main()
