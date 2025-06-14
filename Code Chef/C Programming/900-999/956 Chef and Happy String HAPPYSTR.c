#include <stdio.h>
#include <string.h>
int main()
{
    int t;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        char s[1000];
        scanf("%s",s);
        int st=strlen(s),cnt=0;
        for(int j=0;j<st;j++)
        {
            if(((s[j]=='a'||s[j]=='e'||s[j]=='i'||s[j]=='o'||s[j]=='u')&&(s[j+1]=='a'||s[j+1]=='e'||s[j+1]=='i'||s[j+1]=='o'||s[j+1]=='u'))&&((s[j+2]=='a'||s[j+2]=='e'||s[j+2]=='i'||s[j+2]=='o'||s[j+2]=='u')))
            {
                cnt=3;
                break;
            }
        }
        if(cnt==3)
        {
            printf("HAPPY\n");
        }
        else
        {
            printf("SAD\n");
        }
    }
    return 0;
}
