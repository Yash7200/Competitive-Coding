#include <stdio.h>
#include <string.h>

int main()
{
    int t,size;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d",&size);
        char s[size];
        int cnt=0;
        for(int j=0;j<size;j++)
        {
            scanf("%s",s);
            if(strlen(s)==7)
            {
                cnt+=1;
            }
        }
        printf("%d %d\n",cnt,(size-cnt));
    }
    return 0;
}
