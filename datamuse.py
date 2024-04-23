import requests


def construct_query(word, code, amount):
    print(f"Word: {word}, Code: {code}, Amount: {amount}")
    code_dict = {
        "related_meaning": "ml",
        "sounds_likes": "sl",
        "spelled_like": "sp",
        "adj_noun": "jja",
        "noun_adj": "jjb",
        "synonym": "syn",
        "trigger": "trg",
        "antonym": "ant",
        "kind_of": "spc",
        "more_general_than": "gen",
        "comprises_of": "com",
        "part_of": "par",
        "frequent_follower": "bga",
        "frequent_predecessor": "bgb",
        "homophone": "hom",
        "consonant_match": "cns",
    }
    if code_dict[code] in ["ml", "sl", "sp"]:
        params = {code_dict[code]: word, "max": amount}
    else:
        params = {"rel_" + code_dict[code]: word, "max": amount}
    print(f"Params: {params}")
    print("Query generating")
    return query_datamuse(params)


def query_datamuse(params):
    base_url = "https://api.datamuse.com/words"
    response = requests.get(base_url, params=params)
    # print(f"Response: {response.json()}")
    if response.status_code == 200:
        return response.json()
    else:
        print("Error:", response.status_code)


# result = construct_query("angry", "related_meaning", 5)
# print(result)
