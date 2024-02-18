import sys

from minimal_pair_training.get_word_recording_urls import get_word_recording_urls

word = sys.argv[1]

if not word:
    print("Please provide a word to search for")
    sys.exit(1)

results = get_word_recording_urls(word)
print("\n".join([result.title for result in results]))
